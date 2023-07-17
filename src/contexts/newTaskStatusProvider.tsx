import { Task } from "../models/models.ts";

import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";

export type ColumnTasks = {
    columnId: string;
    tasks: Task[];
};
export const NewTaskStatusContext = createContext<{
    setIsInputTaskOpen: Dispatch<SetStateAction<boolean>>;
    isInputTaskOpen: boolean;
    currentColumnId: string;
    setCurrentColumnId: Dispatch<SetStateAction<string>>;
}>({
    setIsInputTaskOpen: () => {
        // do nothing
    },
    isInputTaskOpen: false,
    currentColumnId: "",
    setCurrentColumnId: () => {
        // do nothing
    },
});

const NewTaskStatusProvider = React.memo(({ children }: any) => {
    const [isInputTaskOpen, setIsInputTaskOpen] = useState(false);
    const [currentColumnId, setCurrentColumnId] = useState("");
    return (
        <NewTaskStatusContext.Provider
            value={{
                currentColumnId,
                setCurrentColumnId,
                isInputTaskOpen,
                setIsInputTaskOpen,
            }}
        >
            {children}
        </NewTaskStatusContext.Provider>
    );
});

export default NewTaskStatusProvider;
