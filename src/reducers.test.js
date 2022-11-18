import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constans';

import * as reducers from './reducers';

describe('searchRobots', () => {

    const initialStateSearch = {
        searchField: ''
    }

    test('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
    });

    test('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' });
    });

});

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    }


    test('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    test('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        });
    });

    test('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [
                {
                    id: 1,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ]
        })).toEqual({
            robots: [
                {
                    id: 1,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ],
            isPending: false,
            error: ''
        });
    });

    test('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOOOO!!!'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'NOOOOOOO!!!'
        });
    });
});
