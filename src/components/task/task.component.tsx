import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Draggable} from "@hello-pangea/dnd";
import {Task} from "../../models/models.ts";
import "./task.component.scss"

const TaskComponent = ({task, pos}: { task: Task, pos: number }) => {
    const {title, id, description, number, priority, assignedToUserId} = task;
    return (
        <Draggable key={id} draggableId={`${id}`} index={pos}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="text-xs flex flex-col custom-task-bg border border-primary-color rounded-md p-3 gap-2"
                >

                    <div className="flex gap-1 items-center primary-color">
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#8256d0"}}></FontAwesomeIcon>
                        <span>{title} #{number} {priority} {assignedToUserId}</span>
                        <div>{id}</div>
                    </div>

                    <div className="primary-color-bold">{description}</div>
                </div>
            )}
        </Draggable>
    )
}

export default TaskComponent;