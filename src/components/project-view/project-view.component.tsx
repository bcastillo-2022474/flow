import ColumnComponent from "../column/column.component.tsx";
import {useContext} from "react";
import {DragDropContext} from "@hello-pangea/dnd";
import {Column} from "../../models/models.ts";
import {TaskContext} from "../../contexts/TaskProvider.tsx";
import onDragEnd from "../../utilities/onDragEnd.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchColumns} from "../../fetchs/fetchColumns.ts";
import {NewTaskStatusContext} from "../../contexts/newTaskStatusProvider.tsx";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {createPortal} from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ProjectViewComponent = () => {
    const {setIsInputTaskOpen} = useContext(NewTaskStatusContext);
    const response = useQuery(["columns"], fetchColumns);
    // this is only to be able to provide the context to the onDragEnd function
    const {columnsTasks, setColumnsTasks} = useContext(TaskContext)

    if (response.isLoading) return <div>Loading...</div>
    if (response.isError) return <div>Error...</div>

    const columns = response.data || [];

    return (
        <>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columnsTasks, setColumnsTasks)}>
                {/*overflow-x-scroll breaks the Intersection Oberver*/}
                <div className="flex relative min-h-full">
                    {columns.map((column: Column) => (
                        <ColumnComponent column={column}></ColumnComponent>
                    ))}
                </div>
            </DragDropContext>
            {createPortal(
                <div onClick={() => {
                    setIsInputTaskOpen(true);
                }}
                     className="flex gap-2 items-center border rounded-2xl p-3 primary-color-bold absolute bottom-0 right-0 my-20 mx-3 primary-background cursor-pointer">
                    <span>New Task</span>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </div>
                ,
                document.body)}
        </>
    )
};

export default ProjectViewComponent;