import ColumnComponent from "../column/column.component.tsx";
import {createContext, Dispatch, SetStateAction, useState} from "react";
import {DragDropContext} from "@hello-pangea/dnd";
import {Column, Priority, Task} from "../../models/models.ts";

export const ProjectViewContext = createContext<{
    objs: { columnId: string, tasks: Task[] }[],
    setObjs: Dispatch<SetStateAction<{ columnId: string, tasks: Task[] }[]>>
}>({
    objs: [],
    setObjs: () => {
        // do nothing
    }
});

let times = 0;
const createTasksMocks = (id: string, num: number): Task[] => {
    const array: Task[] = []
    for (let i = 0; i < num; i++) {
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
    times += num;
    return array
}

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


const ProjectViewComponent = () => {
    const columns = createColumnsMock();
    const initialState = columns.map((column: Column) => {
        return {columnId: column.id, tasks: createTasksMocks(column.id, 3)}
    })

    const [objs, setObjs] = useState<{ columnId: string, tasks: Task[] }[]>(initialState);
    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const itemsDestination = objs.find(({columnId}) => columnId === result.destination.droppableId)?.tasks;
        const itemsSource = objs.find(({columnId}) => columnId === result.source.droppableId)?.tasks;
        if (!itemsDestination || !itemsSource) return;

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        setObjs([...objs, {
            columnId: result.source.droppableId,
            tasks: itemsSource
        }, {columnId: result.destination.droppableId, tasks: itemsDestination}]);
    };

    return (
        <ProjectViewContext.Provider value={{objs, setObjs}}>
            <DragDropContext onDragEnd={onDragEnd}>
                {/*overflow-x-scroll*/}
                <div className="flex min-h-full gap-3 p-5 snap-x ">
                    {columns.map((column: Column) => (
                        <ColumnComponent key={column.id} column={column}></ColumnComponent>
                    ))}
                </div>
            </DragDropContext>
        </ProjectViewContext.Provider>
    )
};

export default ProjectViewComponent;
