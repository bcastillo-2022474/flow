import { Column, Task } from "../../models/models.ts";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskProvider.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchTasksByColumn } from "../../fetchs/fetchTasksByColumn.ts";
import TaskContainerComponent from "../task-container/task-container.component.tsx";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import {
    setCurrentColumnId,
    setIsInputTaskOpen,
} from "../../redux/slices/newTaskStatusSlice.ts";
import { RootState } from "../../redux/reducers.ts";
// import {NewTaskStatusContext} from "../../contexts/newTaskStatusProvider.tsx";

const ColumnComponent = ({
    column: { id, name, color },
}: {
    column: Column;
}) => {
    // const {setCurrentColumnId, currentColumnId, isInputTaskOpen, setIsInputTaskOpen} = useContext(NewTaskStatusContext)
    const dispatch = useDispatch();
    const { currentColumnId, isInputTaskOpen } = useSelector(
        (state: RootState) => state.newTaskStatus
    );

    const [ref] = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) {
                dispatch(setCurrentColumnId(id));
                return;
            }
            if (currentColumnId === id && !inView && isInputTaskOpen) {
                dispatch(setIsInputTaskOpen(false));
            }
        },
    });
    const { columnsTasks, setColumnsTasks } = useContext(TaskContext);
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
            <div
                style={{ borderColor: "var(--primary-color)" }}
                ref={ref}
                className="sticky top-1/2 h-0 w-full border"
            ></div>
            <div className="p-5">
                <div className="relative flex min-w-full flex-col justify-between rounded-md border border-primary-color secondary-background">
                    <div className="p-5">
                        <div className="flex items-center gap-1 primary-color-bold">
                            <span
                                className="rounded-full"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    backgroundColor: color,
                                }}
                            ></span>
                            <span>{name}</span>
                            <span
                                className="flex items-center justify-center rounded-full bg-gray-700 text-xs font-bold primary-color"
                                style={{ width: "2.5ch", height: "2.5ch" }}
                            >
                                3
                            </span>
                        </div>
                        <div className="mb-3 text-xs primary-color">
                            this is a description
                        </div>
                        <TaskContainerComponent
                            tasks={tasks}
                            columnId={id}
                        ></TaskContainerComponent>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColumnComponent;
