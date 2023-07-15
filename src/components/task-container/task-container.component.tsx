import TaskComponent from "../task/task.component.tsx";
import {Droppable} from "@hello-pangea/dnd";
import {useContext, useRef} from "react";
import {Task} from "../../models/models.ts";
import InputTaskComponent from "../input-task/input-task.component.tsx";
import {NewTaskStatusContext} from "../../contexts/newTaskStatusProvider.tsx";

type Props = {
    tasks: Task[],
    columnId: string
}

const TaskContainerComponent = ({tasks, columnId}: Props) => {
    const {isInputTaskOpen, columnId: colId} = useContext(NewTaskStatusContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const isThisColumnOpen = colId.current === columnId;

    return (
        <>
            <Droppable droppableId={columnId} type="column">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2">
                        {tasks.map((task, index) => (
                            <TaskComponent key={task.id} task={task} pos={index}></TaskComponent>
                        ))}
                        {isInputTaskOpen && isThisColumnOpen && (
                            <InputTaskComponent tasks={tasks} columnId={columnId}
                                                inputRef={inputRef}></InputTaskComponent>
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </>
    )
}

export default TaskContainerComponent;
