import React, { useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';
import ErrorBundary from './ErrorBundary';
import './MainPage.css';
import { MainPageProps} from '../types/PropsTypes';
import { Robot } from '../types/robotTypes';

const MainPage = (props: MainPageProps) => {
    const { searchField, onSearchChange, robots, isPending } = props;
    const { onRequestRobots } = props;

    useEffect(() => {
        onRequestRobots();
    }, []);

    const filterRobots = (robots: Robot[]): Robot[] => {
        return robots.filter((robot: Robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    return (
        <div className="tc">
            <Header />
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                {isPending ? <h1>Loading</h1> :
                    <ErrorBundary>
                        <CardList robots={filterRobots(robots)} />
                    </ErrorBundary>
                }
            </Scroll>
        </div>
    );
}


export default MainPage;