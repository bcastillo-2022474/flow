import {Column, Task} from "../../models/models.ts";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../contexts/TaskProvider.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchTasksByColumn} from "../../fetchs/fetchTasksByColumn.ts";
import TaskContainerComponent from "../task-container/task-container.component.tsx";

const ColumnComponent = ({column: {id, name, color}}: { column: Column }) => {
    const {columnsTasks, setColumnsTasks} = useContext(TaskContext);
    const response = useQuery<{ columnId: string, tasks: Task[] }>(["tasks", id], fetchTasksByColumn);

    useEffect(() => {
        if (!response.data) return;
        if (response.isLoading || response.isError) return;

        const columnTasksFetched = response.data;

        // push the new column to the state
        setColumnsTasks((prevState) => {
            console.log({prevState})
            const filteredState = prevState.filter(({columnId}) => columnId !== id);
            return [...filteredState, columnTasksFetched]
        });
    }, [response.data, response.isLoading, response.isError])

    if (response.isLoading) return <div>Loading...</div>
    if (response.isError) return <div>Error...</div>

    // const {tasks} = response.data || [];
    const {tasks} = columnsTasks.find(({columnId}) => columnId === id) || {tasks: []};


    return (
        <div
            className="snap-center snap-mandatory snap-always border border-primary-color rounded-md min-w-full p-5 secondary-background flex flex-col justify-between">
            <div>
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
    )
}

export default ColumnComponent;