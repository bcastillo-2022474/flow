import {
    faClipboard,
    faCodePullRequest,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers.ts";

const TaskSidebarComponent = () => {
    const { isInputTaskOpen } = useSelector(
        (state: RootState) => state.newTaskStatus
    );
    const hideAlways = isInputTaskOpen ? "lg:hidden" : "";

    return (
        <div
            className={`${hideAlways} hidden lg:flex flex-col gap-5 min-w-[300px] grow text-[--white-subtle] primary-background border border-[--blue-border] border-t-0 p-5`}
        >
            <div className="flex items-center">
                <div className="w-1/3">CST-11</div>
                <div className="w-2/3 flex gap-7">
                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCodePullRequest}></FontAwesomeIcon>
                </div>
            </div>
            <div className="border border-[--blue-border]"></div>
            <div className="flex items-center">
                <div className="w-1/3 ">Status</div>
                <div className="w-2/3 px-2 py-1 hover:border hover:border-[rgb(50,51,70)] hover:bg-[rgb(33,34,52)] rounded-sm cursor-pointer">
                    Open
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/3 ">Status</div>
                <div className="w-2/3 px-2 py-1 hover:border hover:border-[rgb(50,51,70)] hover:bg-[rgb(33,34,52)] rounded-sm cursor-pointer">
                    Open
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/3 ">Status</div>
                <div className="w-2/3 px-2 py-1 hover:border hover:border-[rgb(50,51,70)] hover:bg-[rgb(33,34,52)] rounded-sm cursor-pointer">
                    Open
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/3 ">Status</div>
                <div className="w-2/3 px-2 py-1 hover:border hover:border-[rgb(50,51,70)] hover:bg-[rgb(33,34,52)] rounded-sm cursor-pointer">
                    Open
                </div>
            </div>
            <div className="border border-[--blue-border]"></div>
            <div className="flex items-center">
                <div className="w-1/3 ">Project</div>
                <div className="w-2/3 px-2 py-1 hover:border hover:border-[rgb(50,51,70)] hover:bg-[rgb(33,34,52)] rounded-sm cursor-pointer">
                    Some Project
                </div>
            </div>
        </div>
    );
};

export default TaskSidebarComponent;
