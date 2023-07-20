import { faUser } from "@fortawesome/free-solid-svg-icons";
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
                    to="/project/:id/view/:id/task/:idTask"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-col gap-2 rounded-md border border-[--blue-border] bg-[#1d1d2a] p-3 text-xs"
                >
                    <div className="flex items-center justify-between gap-1 primary-color">
                        <span>
                            {title} #{number}
                        </span>
                        <FontAwesomeIcon
                            className="border p-1 border-dashed rounded-full"
                            icon={faUser}
                        ></FontAwesomeIcon>
                    </div>

                    <div className="primary-color-bold">{description}</div>
                    <div>{priority}</div>
                </Link>
            )}
        </Draggable>
    );
};

export default TaskComponent;
