import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, useContext, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskProvider.tsx";
import { Priority, Task } from "../../models/models.ts";
import { useDispatch } from "react-redux";
import { setIsInputTaskOpen } from "../../redux/slices/newTaskStatusSlice.ts";

type Props = {
    inputRef: RefObject<HTMLInputElement>;
    columnId: string;
    tasks: Task[];
};
const InputTaskComponent = ({ inputRef, columnId, tasks }: Props) => {
    // const {setIsInputTaskOpen} = useContext(NewTaskStatusContext);
    const dispatch = useDispatch();
    const { setColumnsTasks } = useContext(TaskContext);

    useEffect(() => {
        inputRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div
            className="flex flex-col gap-2 rounded-md border p-3 text-xs border-primary-color"
            style={{ backgroundColor: "rgb(43, 45, 48)" }}
        >
            <div className="flex items-center gap-1 primary-color">
                <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#8256d0" }}
                ></FontAwesomeIcon>
            </div>

            <input
                ref={inputRef}
                type="text"
                onKeyPress={(event) => {
                    if (event.key !== "Enter") return;
                    setColumnsTasks((prevState) => {
                        const task: Task = {
                            attachments: [],
                            columnId: "",
                            comments: [],
                            sprintId: "",
                            id: "null",
                            title: "",
                            number: 0,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            description: inputRef?.current?.value || "",
                            priority: Priority.MEDIUM,
                        };
                        const filteredState = prevState.filter(
                            (x) => x.columnId !== columnId
                        );
                        return [
                            ...filteredState,
                            { columnId, tasks: [...tasks, task] },
                        ];
                    });
                    dispatch(setIsInputTaskOpen(false));
                }}
                className="bg-gray-700 p-2 primary-color-bold"
            />
        </div>
    );
};

export default InputTaskComponent;
