import {Robot} from './robotTypes';
import {Dispatch, ChangeEvent} from 'react';
import {AnyAction} from '@reduxjs/toolkit';

export interface MainPageProps {
    dispatch: Dispatch<AnyAction>;
    searchField: string;
    robots: Robot[];
    isPending: boolean;
    error: string;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onRequestRobots: () => void;
}