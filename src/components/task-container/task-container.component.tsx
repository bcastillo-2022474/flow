import TaskComponent from "../task/task.component.tsx";
import {Droppable} from "@hello-pangea/dnd";
import {useRef, useState} from "react";
import {createPortal} from "react-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Task} from "../../models/models.ts";
import InputTaskComponent from "../input-task/input-task.component.tsx";

type Props = {
    tasks: Task[],
    columnId: string
}

const TaskContainerComponent = ({tasks, columnId}: Props) => {
    const [isInputTaskOpen, setIsInputTaskOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <Droppable droppableId={columnId} type="column">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2">
                        {tasks.map((task, index) => (
                            <TaskComponent key={task.id} task={task} pos={index}></TaskComponent>
                        ))}
                        {isInputTaskOpen && (
                            <InputTaskComponent tasks={tasks} columnId={columnId}
                                                setIsInputTaskOpen={setIsInputTaskOpen}
                                                inputRef={inputRef}></InputTaskComponent>
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            {createPortal(
                <div onClick={() => {
                    setIsInputTaskOpen(true);
                }}
                     className="flex gap-2 items-center border rounded-2xl p-3 primary-color-bold absolute bottom-0 right-0 my-20 mx-3 primary-background cursor-pointer">
                    <span>New Task</span>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </div>
                ,
                document.body)}
        </>
    )
}

export default TaskContainerComponent;
