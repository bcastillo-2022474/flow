import TaskDescriptionComponent from "../task-description/task-description.component.tsx";
import "./task-view.component.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers.ts";
import HeaderComponent from "../header/header.component.tsx";
import SidebarComponent from "../sidebar/sidebar.component.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboard,
    faCodePullRequest,
    faLink,
} from "@fortawesome/free-solid-svg-icons";

const TaskViewComponent = () => {
    const isClosingTaskView = useSelector(
        (state: RootState) => state.isClosingTaskView
    );
    const slideOut = isClosingTaskView ? "slide-out " : "";

    return (
        <div className="flex w-full relative">
            <SidebarComponent></SidebarComponent>
            <div
                className={
                    slideOut +
                    "flex flex-col w-full min-h-screen rounded slide-in"
                }
            >
                {/*<TaskHeaderComponent></TaskHeaderComponent>*/}
                <div className="top-0 sticky">
                    <HeaderComponent></HeaderComponent>
                </div>
                <div className="grow max-h-[calc(100%-(100%/12))] flex flex-col overflow-hidden primary-background">
                    {/* rename to task body*/}
                    <TaskDescriptionComponent></TaskDescriptionComponent>
                </div>
                {/*<TaskFooterComponent></TaskFooterComponent>*/}
            </div>
            <div className="hidden lg:flex flex-col gap-5 min-w-[300px] grow text-[--white-subtle] primary-background border border-[--blue-border] border-t-0 p-5">
                <div className="flex items-center">
                    <div className="w-1/3">CST-11</div>
                    <div className="w-2/3 flex gap-7">
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faCodePullRequest}
                        ></FontAwesomeIcon>
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
        </div>
    );
};

export default TaskViewComponent;
