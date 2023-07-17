import { combineReducers } from "@reduxjs/toolkit";
import newTaskStatusReducer from "./slices/newTaskStatusSlice.ts";
import isClosingTaskViewReducer from "./slices/isClosingTaskViewSlice.ts";

const rootReducer = combineReducers({
    newTaskStatus: newTaskStatusReducer,
    isClosingTaskView: isClosingTaskViewReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
