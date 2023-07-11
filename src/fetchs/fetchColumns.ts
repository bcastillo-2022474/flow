import {Column} from "../models/models.ts";

const createColumnsMock = (): Column[] => {
    const array: Column[] = []
    for (let i = 0; i < 4; i++) {
        array.push({
            color: "rgb(110, 231, 183)",
            id: `${i}`,
            name: "TODO",
            projectId: "1",
            tasks: [],
        })
    }

    return array
}

export const fetchColumns = async (): Promise<Column[]> => {
    return createColumnsMock();
};

