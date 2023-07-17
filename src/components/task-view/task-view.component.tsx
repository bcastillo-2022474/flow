import TaskHeaderComponent from "../task-header/task-header.component.tsx";
import TaskDescriptionComponent from "../task-description/task-description.component.tsx";
import TaskFooterComponent from "../task-footer/task-footer.component.tsx";
import "./task-view.component.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers.ts";

const TaskViewComponent = () => {
    const isClosingTaskView = useSelector(
        (state: RootState) => state.isClosingTaskView
    );
    const slideOut = isClosingTaskView ? "slide-out " : "";

    return (
        <div
            style={{ width: "min(100%, 500px)" }}
            className={
                slideOut +
                "flex flex-col relative min-h-screen rounded slide-in"
            }
        >
            <TaskHeaderComponent></TaskHeaderComponent>
            <div className="grow flex flex-col overflow-hidden third-background">
                <TaskDescriptionComponent></TaskDescriptionComponent>
            </div>
            <TaskFooterComponent></TaskFooterComponent>
        </div>
    );
};

export default TaskViewComponent;
