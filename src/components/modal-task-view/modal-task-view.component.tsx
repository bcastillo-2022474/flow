import DelayLink from "../delay-link/delay-link.component.tsx";
import { setIsClosingTaskView } from "../../redux/slices/isClosingTaskViewSlice.ts";
import TaskViewComponent from "../task-view/task-view.component.tsx";
import { useDispatch } from "react-redux";

const ModalTaskViewComponent = () => {
    const dispatch = useDispatch();

    return (
        <div className="h-screen w-full absolute top-0 flex justify-end">
            <DelayLink
                delay={0.31}
                onDelayStart={() => {
                    dispatch(setIsClosingTaskView(true));
                }}
                onDelayEnd={() => {
                    setTimeout(() => {
                        dispatch(setIsClosingTaskView(false));
                    }, 10);
                }}
                to="/project/:id"
                className="absolute bg-white opacity-20 h-full w-full"
            />
            <TaskViewComponent></TaskViewComponent>
        </div>
    );
};

export default ModalTaskViewComponent;
