import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBundary from '../components/ErrorBundary';
import { requestRobots, setSearchField } from '../actions'
import './App.css';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

const App = (props) => {
    const {searchField, onSearchChange} = props;
    const { onRequestRobots, robots, isPending } = props;

    useEffect(() => {
        onRequestRobots();
    }, [onRequestRobots]);

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
        return (
            <div className='tc'>
                <h1>Loading</h1>
            </div>
        );
    } else {
        return (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBundary>
                        <CardList robots={filterRobots} />
                    </ErrorBundary>
                </Scroll>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);