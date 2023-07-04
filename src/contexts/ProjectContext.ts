import {createContext, Dispatch, SetStateAction} from "react";
import {Task} from "../models/models.ts";


export type ColumnTasks = {
    columnId: string;
    tasks: Task[];
};

export type Context = {
    columnsTasks: ColumnTasks[];
    setColumnsTasks: Dispatch<SetStateAction<ColumnTasks[]>>;
};

const ProjectContext = createContext({} as unknown as Context);

export default ProjectContext;
