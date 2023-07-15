import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NewTaskStatusState {
    isInputTaskOpen: boolean;
    currentColumnId: string;
}

const initialState: NewTaskStatusState = {
    isInputTaskOpen: false,
    currentColumnId: '',
};

const newTaskStatusSlice = createSlice({
    name: 'newTaskStatus',
    initialState,
    reducers: {
        setIsInputTaskOpen: (state, action: PayloadAction<boolean>) => {
            state.isInputTaskOpen = action.payload;
        },
        setCurrentColumnId: (state, action: PayloadAction<string>) => {
            state.currentColumnId = action.payload;
        },
    },
});

export const {setIsInputTaskOpen, setCurrentColumnId} = newTaskStatusSlice.actions;
export default newTaskStatusSlice.reducer;
