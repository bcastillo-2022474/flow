import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "@hello-pangea/dnd";
import { Task } from "../../models/models.ts";
import "./task.component.scss";
import { Link } from "react-router-dom";

const TaskComponent = ({ task, pos }: { task: Task; pos: number }) => {
    const { title, id, description, number, priority, assignedToUserId } = task;

    return (
        <Draggable key={id} draggableId={`${id}`} index={pos}>
            {(provided) => (
                <Link
                    to="/project/:id/task/:idTask"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-col gap-2 rounded-md border p-3 text-xs custom-task-bg border-primary-color"
                >
                    <div className="flex items-center gap-1 primary-color">
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            style={{ color: "#8256d0" }}
                        ></FontAwesomeIcon>
                        <span>
                            {title} #{number} {priority} {assignedToUserId}
                        </span>
                        <div>{id}</div>
                    </div>

                    <div className="primary-color-bold">{description}</div>
                </Link>
            )}
        </Draggable>
    );
};

export default TaskComponent;
