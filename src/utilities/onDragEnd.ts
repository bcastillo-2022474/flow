import {Task} from "../models/models.ts";
import {Dispatch, SetStateAction} from "react";
import {DropResult} from "@hello-pangea/dnd";

type SetColumnsTasks = Dispatch<SetStateAction<{ columnId: string, tasks: Task[] }[]>>;
type ColumnsTasks = { columnId: string, tasks: Task[] }[];
const onDragEnd = (result: DropResult, columnsTasks: ColumnsTasks, setColumnsTasks: SetColumnsTasks) => {
    if (!result.destination) return;

    const itemsDestination = columnsTasks.find(({columnId}) => columnId === result.destination?.droppableId)?.tasks;
    const itemsSource = columnsTasks.find(({columnId}) => columnId === result.source.droppableId)?.tasks;

    if (!itemsDestination || !itemsSource) return;

    const [reorderedItem] = itemsSource.splice(result.source.index, 1);
    itemsDestination.splice(result.destination.index, 0, reorderedItem);

    setColumnsTasks([...columnsTasks, {
        columnId: result.source.droppableId,
        tasks: itemsSource
    }, {columnId: result.destination.droppableId, tasks: itemsDestination}]);
};

export default onDragEnd;