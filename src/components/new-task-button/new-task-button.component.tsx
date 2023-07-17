import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { setIsInputTaskOpen } from "../../redux/slices/newTaskStatusSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers.ts";

const NewTaskButtonComponent = () => {
    const { isInputTaskOpen } = useSelector(
        (state: RootState) => state.newTaskStatus
    );
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => {
                if (isInputTaskOpen) return;
                dispatch(setIsInputTaskOpen(true));
            }}
            style={{ bottom: "calc(calc(100vh / 12) + 10px)" }}
            className="fixed right-0 mx-3 flex cursor-pointer items-center gap-2 rounded-2xl border p-3 primary-color-bold primary-background"
        >
            <span>New Task</span>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </div>
    );
};

export default NewTaskButtonComponent;
