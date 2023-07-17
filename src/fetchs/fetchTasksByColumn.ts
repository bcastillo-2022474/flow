import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { Priority, Task } from "../models/models.ts";

let times = 0;
const createTasksMocks = (id: string, num: number): Task[] => {
    const array: Task[] = [];
    for (let i = 0; i < num; i++) {
        array.push({
            title: "Lorem ipsum dolor sit amet.",
            number: i + times,
            updatedAt: new Date(),
            id: `${i + times}`,
            sprintId: "1",
            columnId: `${id}`,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quod?",
            comments: [],
            attachments: [],
            createdAt: new Date(),
            priority: Priority.MEDIUM,
            dueDate: new Date(),
        });
    }
    times += num;
    return array;
};

export const fetchTasksByColumn = async ({
    queryKey,
}: QueryFunctionContext<QueryKey, any>): Promise<{
    columnId: string;
    tasks: Task[];
}> => {
    const [, columnId] = queryKey;
    return {
        tasks: createTasksMocks(columnId as string, 10),
        columnId: columnId as string,
    };
};
