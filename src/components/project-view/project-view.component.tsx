import ColumnComponent from "../column/column.component.tsx";
import { useContext } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { Column } from "../../models/models.ts";
import { TaskContext } from "../../contexts/TaskProvider.tsx";
import onDragEnd from "../../utilities/onDragEnd.ts";
import { useQuery } from "@tanstack/react-query";
import { fetchColumns } from "../../fetchs/fetchColumns.ts";
import { createPortal } from "react-dom";
import { useMatch } from "react-router-dom";
import ModalTaskViewComponent from "../modal-task-view/modal-task-view.component.tsx";

const ProjectViewComponent = () => {
    const match = useMatch("/project/:id/view/:id/task/:idTask");
    const response = useQuery(["columns"], fetchColumns);
    // this is only to be able to provide the context to the onDragEnd function
    const { columnsTasks, setColumnsTasks } = useContext(TaskContext);

    if (response.isLoading) return <div>Loading...</div>;
    if (response.isError) return <div>Error...</div>;

    const columns = response.data || [];

    return (
        <>
            <DragDropContext
                onDragEnd={(result) => {
                    onDragEnd(result, columnsTasks, setColumnsTasks);
                }}
            >
                {/*overflow-x-scroll breaks the Intersection Oberver*/}
                {/*{"overflow-x-scroll snap-mandatory snap-x snap-always"} for */}
                {/*the snap behaviour, currently disabled because overflow-x-scroll*/}
                {/*breaks Intersection Observer and snap behaviour in general*/}
                {/*breaks the drag and dro functionality*/}
                <div className="relative flex h-full overflow-x-scroll overflow-y-hidden">
                    {columns.map((column: Column) => (
                        // to enable the snap behaviour, add the class snap-center
                        <div className="w-full shrink-0 max-w-[350px]">
                            <ColumnComponent key={column.id} column={column} />
                        </div>
                    ))}
                </div>
            </DragDropContext>
            {match && createPortal(<ModalTaskViewComponent />, document.body)}
        </>
    );
};

export default ProjectViewComponent;
