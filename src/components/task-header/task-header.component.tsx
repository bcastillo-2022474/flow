import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faThumbtack,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import DelayLink from "../delay-link/delay-link.component.tsx";
import { setIsClosingTaskView } from "../../redux/slices/isClosingTaskViewSlice.ts";
import { useDispatch } from "react-redux";

const TaskHeaderComponent = () => {
    const dispatch = useDispatch();
    return (
        <div className="sticky top-0 z-50 flex flex-col gap-2 border-b p-3 primary-color third-background">
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                    <span>Lorem ipsum.</span>
                    <span>#6</span>
                </div>
                <div className="flex">
                    <div className="cursor-pointer rounded p-1 px-2 hover:bg-gray-700">
                        <FontAwesomeIcon
                            className="rotate-45"
                            icon={faThumbtack}
                        ></FontAwesomeIcon>
                    </div>
                    <DelayLink
                        delay={0.31}
                        onDelayStart={() => {
                            dispatch(setIsClosingTaskView(true));
                        }}
                        onDelayEnd={() => {
                            // wrapped on a setTimeout to assure it runs after the stack is empty
                            setTimeout(() => {
                                dispatch(setIsClosingTaskView(false));
                            }, 0);
                        }}
                        to="/project/:id"
                        className="cursor-pointer rounded p-1 px-2 hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </DelayLink>
                </div>
            </div>
            <div className="flex items-center justify-between text-2xl">
                <div className="flex gap-1">
                    <h2 className="font-bold primary-color-bold">
                        name of task
                    </h2>
                    <span>#6</span>
                </div>
                <button className="rounded px-2 py-1 text-xs hover:bg-gray-700">
                    Edit title
                </button>
            </div>
            <div className="flex items-center gap-3 text-xs">
                <span className="rounded bg-emerald-800 px-2 py-1 primary-color-bold">
                    status
                </span>
                <span className="primary-color-bold">
                    name of creator of task
                </span>
                <span>Opened 5 days ago</span>
            </div>
        </div>
    );
};

export default TaskHeaderComponent;
