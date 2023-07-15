import {Task} from "../models/models.ts";

import React, {createContext, Dispatch, SetStateAction, useRef, useState} from "react";

export type ColumnTasks = {
    columnId: string;
    tasks: Task[];
};
export const NewTaskStatusContext = createContext<{
    setIsInputTaskOpen: Dispatch<SetStateAction<boolean>>,
    isInputTaskOpen: boolean,
    columnId: { current: string },
}>({
    setIsInputTaskOpen: () => {
        // do nothing
    },
    isInputTaskOpen: false,
    columnId: {current: ""},
});

const NewTaskStatusProvider = React.memo(({children}: any) => {
    const [isInputTaskOpen, setIsInputTaskOpen] = useState(false);
    const columnId = useRef<string>("");
    return (
        <NewTaskStatusContext.Provider
            value={{columnId, isInputTaskOpen, setIsInputTaskOpen}}>
            {children}
        </NewTaskStatusContext.Provider>
    )
})

export default NewTaskStatusProvider;