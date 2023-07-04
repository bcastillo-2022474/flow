import {createContext, Dispatch, SetStateAction, useState} from "react";
import {DragDropContext} from "@hello-pangea/dnd";
import {Column, Priority, Task} from "../models/models.ts";
import ColumnComponent from "../components/column/column.component.tsx";

export const TestContext = createContext<{
    objs: { columnId: string, tasks: Task[] }[],
    setObjs: Dispatch<SetStateAction<{ columnId: string, tasks: Task[] }[]>>
}>({
    objs: [],
    setObjs: () => {
        // do nothing
    }
});

let times = 0;
const createTasksMocks = (id: string): Task[] => {
    const array: Task[] = []
    for (let i = 0; i < 10; i++) {
        array.push({
            title: "Lorem ipsum dolor sit amet.",
            number: i + times,
            updatedAt: new Date(),
            id: `${i + times}`,
            sprintId: "1",
            columnId: `${id}`,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quod?",
            comments: [],
            attachments: [],
            createdAt: new Date(),
            priority: Priority.MEDIUM,
            dueDate: new Date(),
        })
    }
    times += 10;
    return array
}

const createColumnsMock = (): Column[] => {
    const array: Column[] = []
    for (let i = 0; i < 2; i++) {
        array.push({
            color: "#01f",
            id: `${i}`,
            name: "TODO",
            projectId: "1",
            tasks: [],
        })
    }

    return array
}

function Test() {
    const columns = createColumnsMock();
    const initialState = columns.map((column: Column) => {
        return {columnId: column.id, tasks: createTasksMocks(column.id)}
    })
    const [objs, setObjs] = useState<{ columnId: string, tasks: Task[] }[]>(initialState);
    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const itemsDestination = objs.find(({columnId}) => columnId === result.destination.droppableId)?.tasks;
        const itemsSource = objs.find(({columnId}) => columnId === result.source.droppableId)?.tasks;
        console.log({itemsDestination, objs, result})
        if (!itemsDestination || !itemsSource) return;

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        setObjs([...objs, {
            columnId: result.source.droppableId,
            tasks: itemsSource
        }, {columnId: result.destination.droppableId, tasks: itemsDestination}]);
    };

    return (
        <div className="App">
            <TestContext.Provider value={{objs, setObjs}}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="flex">
                        {columns.map((column: Column) => (
                            <ColumnComponent key={column.id} column={column}></ColumnComponent>
                        ))}
                    </div>
                </DragDropContext>
            </TestContext.Provider>
        </div>
    );
}

export default Test;