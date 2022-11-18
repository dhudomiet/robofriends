import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constans';

import * as actions from './actions';

fetchMock.enableMocks();

describe('setSearchField action', () => {
    test('should create an action to search robots', () => {
        const text = 'test';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
});


describe('requestRobots action', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    const mockStore = configureMockStore([thunk]);

    test('should handle REQUEST_ROBOTS_PENDING', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();

        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }

        expect(action[0]).toEqual(expectedAction);

    });

    test('should handle REQUEST_ROBOTS_SUCCESS', () => {
        const store = mockStore();

        const robots = [
            {
                id: 1,
                name: 'John',
                email: 'john@gmail.com'
            }
        ]

        const expectedAction = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: robots
        };

        fetch.mockResponseOnce(JSON.stringify(robots));

        store.dispatch(actions.requestRobots())
            .then(() => {
                const action = store.getActions();
                expect(action[1]).toEqual(expectedAction);
            });
    });

    test('should handle REQUEST_ROBOTS_FAILED', () => {
        const store = mockStore();

        fetch.mockReject(() => Promise.reject('NOOOOOO!!!'));

        const expectedAction = {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOOO!!!'
        }

        const result = store.dispatch(actions.requestRobots());
        result.then(() => {
            const action = store.getActions();
            expect(action[1]).toEqual(expectedAction);
        });
    });
});
