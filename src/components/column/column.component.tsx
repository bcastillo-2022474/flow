import {Column, Task} from "../../models/models.ts";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../contexts/TaskProvider.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchTasksByColumn} from "../../fetchs/fetchTasksByColumn.ts";
import TaskContainerComponent from "../task-container/task-container.component.tsx";
import {useInView} from "react-intersection-observer";
import {NewTaskStatusContext} from "../../contexts/newTaskStatusProvider.tsx";

const ColumnComponent = ({column: {id, name, color}}: { column: Column }) => {
    const {columnId, isInputTaskOpen, setIsInputTaskOpen} = useContext(NewTaskStatusContext)

    const [ref] = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) {
                columnId.current = id;
                return;
            }
            if (columnId.current === id && !inView && isInputTaskOpen) {
                setIsInputTaskOpen(false);
            }
        }
    })
    const {columnsTasks, setColumnsTasks} = useContext(TaskContext);
    const response = useQuery<{ columnId: string, tasks: Task[] }>(["tasks", id], fetchTasksByColumn);

    useEffect(() => {
        if (!response.data) return;
        if (response.isLoading || response.isError) return;

        const columnTasksFetched = response.data;

        // push the new column to the state
        setColumnsTasks((prevState) => {
            const filteredState = prevState.filter(({columnId}) => columnId !== id);
            return [...filteredState, columnTasksFetched]
        });
    }, [response.data, response.isLoading, response.isError])

    if (response.isLoading) return <div>Loading...</div>
    if (response.isError) return <div>Error...</div>

    // const {tasks} = response.data || [];
    const {tasks} = columnsTasks.find(({columnId}) => columnId === id) || {tasks: []};


    return (
        <div className="min-w-full">
            <div ref={ref} className="sticky top-1/2 w-full h-0 border"></div>
            <div className="p-5">
                <div
                    className="relative snap-center snap-mandatory snap-always border border-primary-color rounded-md min-w-full secondary-background flex flex-col justify-between">
                    <div className="p-5">
                        <div className="flex gap-1 items-center primary-color-bold">
                    <span className="rounded-full"
                          style={{width: "15px", height: "15px", backgroundColor: color}}></span>
                            <span>{name}</span>
                            <span
                                className="bg-gray-700 primary-color font-bold rounded-full flex items-center justify-center text-xs"
                                style={{width: "2.5ch", height: "2.5ch"}}>3</span>
                        </div>
                        <div className="primary-color text-xs mb-3">
                            this is a description
                        </div>
                        <TaskContainerComponent tasks={tasks} columnId={id}></TaskContainerComponent>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ColumnComponent;
