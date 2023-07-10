import ColumnComponent from "../column/column.component.tsx";
import {useContext} from "react";
import {DragDropContext} from "@hello-pangea/dnd";
import {Column} from "../../models/models.ts";
import {TaskContext} from "../../contexts/TaskProvider.tsx";
import onDragEnd from "../../utilities/onDragEnd.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchColumns} from "../../fetchs/fetchColumns.ts";


const ProjectViewComponent = () => {
    const response = useQuery(["columns"], fetchColumns);
    // this is only to be able to provide the context to the onDragEnd function
    const {columnsTasks, setColumnsTasks} = useContext(TaskContext)

    if (response.isLoading) return <div>Loading...</div>
    if (response.isError) return <div>Error...</div>

    const columns = response.data || [];

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columnsTasks, setColumnsTasks)}>
            {/*overflow-x-scroll*/}
            <div className="flex min-h-full gap-3 p-5 overflow-x-scroll">
                {columns.map((column: Column) => (
                    <ColumnComponent key={column.id} column={column}></ColumnComponent>
                ))}
            </div>
        </DragDropContext>
    )
};

export default ProjectViewComponent;