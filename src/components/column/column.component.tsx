import { Column, Task } from "../../models/models.ts";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskProvider.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchTasksByColumn } from "../../fetchs/fetchTasksByColumn.ts";
import TaskContainerComponent from "../task-container/task-container.component.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { setIsInputTaskOpen } from "../../redux/slices/newTaskStatusSlice.ts";
import { useDispatch } from "react-redux";
// import {NewTaskStatusContext} from "../../contexts/newTaskStatusProvider.tsx";

const ColumnComponent = ({
    column: { id, name, color },
}: {
    column: Column;
}) => {
    // const {setCurrentColumnId, currentColumnId, isInputTaskOpen, setIsInputTaskOpen} = useContext(NewTaskStatusContext)
    const { columnsTasks, setColumnsTasks } = useContext(TaskContext);
    const dispatch = useDispatch();
    const response = useQuery<{ columnId: string; tasks: Task[] }>(
        ["tasks", id],
        fetchTasksByColumn
    );

    useEffect(() => {
        if (!response.data) return;
        if (response.isLoading || response.isError) return;

        const columnTasksFetched = response.data;

        // push the new column to the state
        setColumnsTasks((prevState) => {
            const filteredState = prevState.filter(
                ({ columnId }) => columnId !== id
            );
            return [...filteredState, columnTasksFetched];
        });
    }, [response.data, response.isLoading, response.isError]);

    if (response.isLoading) return <div>Loading...</div>;
    if (response.isError) return <div>Error...</div>;

    // const {tasks} = response.data || [];
    const { tasks } = columnsTasks.find(({ columnId }) => columnId === id) || {
        tasks: [],
    };

    return (
        <>
            <div className="p-5 h-full">
                <div className="relative flex w-full h-full flex-col justify-between rounded-md gap-5">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                            <span>Todo</span>
                            <span>12</span>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon
                                className="cursor-pointer"
                                icon={faPlus}
                                onClick={() => {
                                    dispatch(setIsInputTaskOpen(true));
                                }}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                                className="cursor-pointer"
                                icon={faEllipsis}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                    <TaskContainerComponent
                        tasks={tasks}
                        columnId={id}
                    ></TaskContainerComponent>
                </div>
            </div>
        </>
    );
};

export default ColumnComponent;
