import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import MainPage from './MainPage';
import configureStore from 'redux-mock-store';
import { setSearchField, requestRobots } from '../actions'
import { REQUEST_ROBOTS_SUCCESS, CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING } from '../constans';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        onSearchChange: jest.fn(),
        isPending: false,
    }

    wrapper = render(<MainPage {...mockProps} />);

});

describe('MainPage', () => {
    test('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    const robots = [
        {
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }
    ]

    test('filter robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: robots,
            searchField: 'john',
            onSearchChange: jest.fn(),
            isPending: false,
        }
        const wrapper2 = render(<MainPage {...mockProps2} />);

        expect(wrapper2.queryByTestId('3')).toBeTruthy();
    });

    test('filter return empty robots', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [
                {
                    id: 3,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ],
            searchField: 'a',
            isPending: false,
        }

        const wrapper2 = render(<MainPage {...mockProps2} />);

        expect(wrapper2.queryByTestId('3')).toBeNull();
    });

    test('should render Loading message when isPending flag is true', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [
                {
                    id: 3,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ],
            searchField: 'a',
            isPending: true,
        }

        render(<MainPage {...mockProps2} />);

        expect(screen.getByText('Loading')).toBeTruthy();
    });
});