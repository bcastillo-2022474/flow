import {Task} from "../models/models.ts";

import React, {createContext, Dispatch, SetStateAction, useState} from "react";

export type ColumnTasks = {
    columnId: string;
    tasks: Task[];
};
export const TaskContext = createContext<{
    columnsTasks: { columnId: string, tasks: Task[] }[],
    setColumnsTasks: Dispatch<SetStateAction<{ columnId: string, tasks: Task[] }[]>>
}>({
    columnsTasks: [],
    setColumnsTasks: () => {
        // do nothing
    }
});

const TaskProvider = React.memo(({children}: any) => {
    const [columnsTasks, setColumnsTasks] = useState<ColumnTasks[]>([]); // [{columnId: string},{},{}
    return (
        <TaskContext.Provider value={{columnsTasks, setColumnsTasks}}>
            {children}
        </TaskContext.Provider>
    )
})

export default TaskProvider;