import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../types/searchTypes';


const initialState: SearchState = {
    searchField: ''
}


const searchSlice = createSlice({
    name: 'Search',
    initialState,
    reducers: {
        setSearchField: (state: SearchState, action: PayloadAction<string>) => {
            state.searchField = action.payload;
        }
    }
});

export const selectSearchField = (state: SearchState) => state.searchField;

export const { setSearchField } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;