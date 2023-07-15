import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {RefObject, useContext} from "react";
import {TaskContext} from "../../contexts/TaskProvider.tsx";
import {Priority, Task} from "../../models/models.ts";
// import {NewTaskStatusContext} from "../../contexts/newTaskStatusProvider.tsx";
import {useDispatch} from "react-redux";
import {setIsInputTaskOpen} from "../../redux/slices/newTaskStatusSlice.ts";

type Props = {
    inputRef: RefObject<HTMLInputElement>
    columnId: string
    tasks: Task[]
}
const InputTaskComponent = ({inputRef, columnId, tasks}: Props) => {
    // const {setIsInputTaskOpen} = useContext(NewTaskStatusContext);
    const dispatch = useDispatch();
    const {setColumnsTasks} = useContext(TaskContext)

    return (
        <div
            className="text-xs flex flex-col border border-primary-color rounded-md p-3 gap-2"
            style={{backgroundColor: "rgb(43, 45, 48)"}}
        >

            <div className="flex gap-1 items-center primary-color">
                <FontAwesomeIcon icon={faCircleCheck}
                                 style={{color: "#8256d0"}}></FontAwesomeIcon>
            </div>

            <input ref={inputRef} type="text" onKeyPress={(event) => {
                if (event.key !== "Enter") return;
                setColumnsTasks((prevState) => {
                    const task: Task = {
                        attachments: [], columnId: "", comments: [], sprintId: "",
                        id: "null",
                        title: "",
                        number: 0,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        description: inputRef?.current?.value || "",
                        priority: Priority.MEDIUM
                    };
                    const filteredState = prevState.filter((x) => x.columnId !== columnId);
                    return [...filteredState, {columnId, tasks: [...tasks, task]}]
                })
                dispatch(setIsInputTaskOpen(false));
            }}
                   className="primary-color-bold p-2 bg-gray-700"/>
        </div>
    )
}

export default InputTaskComponent;