import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Robot, RobotFetchError } from '../types/robotTypes';


interface RobotState {
    isPending: boolean;
    robots: Robot[];
    error: string;
}

const initialState: RobotState = {
    isPending: false,
    robots: [],
    error: ''
}

export const selectIsPending = (state: RootState) => state.requestRobots.isPending;
export const selectRobots = (state: RootState) => state.requestRobots.robots;
export const selectError = (state: RootState) => state.requestRobots.error;

export const requestRobots = createAsyncThunk<Robot[], void, { rejectValue: RobotFetchError }>('robots/fetch',
    async (_: void, { rejectWithValue }) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.status !== 200) {
            return rejectWithValue({
                message: 'NOOOOOOOO!'
            });
        }

        const data: Robot[] = await response.json();

        return data;
    });

export const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestRobots.pending, (state) => {
            state.isPending = true;

        });

        builder.addCase(requestRobots.fulfilled, (state, action: PayloadAction<Robot[]>) => {
            state.robots = action.payload;
            state.isPending = false;
        });

        builder.addCase(requestRobots.rejected, (state, { payload }) => {
            if (payload) state.error = payload.message;
            state.isPending = false;
        })
    }
});

export const robotsReducer = robotsSlice.reducer;
