import TaskDescriptionComponent from "../task-description/task-description.component.tsx";
import "./task-view.component.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers.ts";
import HeaderComponent from "../header/header.component.tsx";
import SidebarComponent from "../sidebar/sidebar.component.tsx";
import TaskSidebarComponent from "../task-sidebar/task-sidebar.component.tsx";
import TaskHeaderComponent from "../task-header/task-header.component.tsx";

const TaskViewComponent = () => {
    const isClosingTaskView = useSelector(
        (state: RootState) => state.isClosingTaskView
    );
    const slideOut = isClosingTaskView ? "slide-out " : "";

    return (
        <div className="flex w-full relative">
            <SidebarComponent></SidebarComponent>
            <div
                className={`${slideOut} flex flex-col w-full min-h-screen rounded slide-in`}
            >
                <div className="top-0 sticky">
                    <TaskHeaderComponent></TaskHeaderComponent>
                </div>
                <div className="grow max-h-[calc(100%-(100%/12))] flex flex-col overflow-hidden primary-background">
                    {/* rename to task body*/}
                    <TaskDescriptionComponent></TaskDescriptionComponent>
                </div>
                {/*<TaskFooterComponent></TaskFooterComponent>*/}
            </div>
            <TaskSidebarComponent></TaskSidebarComponent>
        </div>
    );
};

export default TaskViewComponent;
