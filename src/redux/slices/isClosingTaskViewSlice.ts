import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const isClosingTaskViewSlice = createSlice({
    name: "isClosingTaskView",
    initialState: false,
    reducers: {
        setIsClosingTaskView: (_: boolean, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
});

export const { setIsClosingTaskView } = isClosingTaskViewSlice.actions;
export default isClosingTaskViewSlice.reducer;
