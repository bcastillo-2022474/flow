import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import TaskComponent from "../task/task.component.tsx";
import {Column} from "../../models/models.ts";
import {Droppable} from "@hello-pangea/dnd";
import {useContext} from "react";
import {ProjectViewContext} from "../project-view/project-view.component.tsx";
// import {TestContext} from "../../test/Test.tsx";

const ColumnComponent = ({column: {id, name, color}}: { column: Column }) => {
    const {tasks} = useContext(ProjectViewContext).objs.find(({columnId}) => columnId === id) || {tasks: []};
    return (
        <div
            className="snap-center snap-mandatory snap-always border border-primary-color rounded-3xl min-w-full p-5 secondary-background flex flex-col justify-between">
            <div>
                <div className="flex gap-1 items-center primary-color-bold bg-">
                    <span className="rounded-full"
                          style={{width: "15px", height: "15px", backgroundColor: color}}></span>
                    <span>{name}</span>
                    <span
                        className="bg-gray-700 primary-color font-bold rounded-full flex items-center justify-center text-xs"
                        style={{width: "2.5ch", height: "2.5ch"}}>3</span>
                </div>
                <div className="primary-color text-xs mb-3">
                    this is a description
                </div>
                <Droppable droppableId={id} type="column">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2">
                            {tasks.map((task, index) => (
                                <TaskComponent key={task.id} task={task} pos={index}></TaskComponent>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <div
                className="btn flex justify-end primary-color-bold font-bold text items-center gap-2 hover:cursor-pointer">
                <FontAwesomeIcon icon={faPlus}/><span>add Item</span></div>
        </div>
    )
}

export default ColumnComponent;