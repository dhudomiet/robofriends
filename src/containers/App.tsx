import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import MainPage from '../components/MainPage';
import { RootState, useAppDispatch } from '../index';
import { requestRobots } from '../reducers/robotReducer';
import { setSearchField } from '../reducers/searchReducer';

const App = () => {
    const dispatch = useAppDispatch();
    const searchField = useSelector((state: RootState) => state.searchRobots.searchField);
    const robots = useSelector((state: RootState) => state.requestRobots.robots);
    const isPending = useSelector((state: RootState) => state.requestRobots.isPending);
    const error = useSelector((state: RootState) => state.requestRobots.error);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(event.target.value)); 
    const onRequestRobots = () => dispatch(requestRobots());

    return <MainPage
        dispatch={dispatch}
        searchField={searchField}
        robots={robots}
        isPending={isPending}
        error={error}
        onSearchChange={onSearchChange}
        onRequestRobots={onRequestRobots}
    />
}

export default App;