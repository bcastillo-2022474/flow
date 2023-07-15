import {combineReducers} from '@reduxjs/toolkit'
import newTaskStatusReducer from "./slices/newTaskStatusSlice.ts"

const rootReducer = combineReducers({
    newTaskStatus: newTaskStatusReducer,
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;