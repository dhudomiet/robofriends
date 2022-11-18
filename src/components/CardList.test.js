import React from 'react';
import CardList from './CardList';
import {render, screen} from '@testing-library/react';

describe('CardList', () => {
    test('renders Card component', () => {
        const robots = [
            {
                id: 1,
                name: 'John Snow',
                username: "JohnJohn",
                email: 'john@email.com'
            }
        ]
        const output = render(<CardList robots={robots} />);
        expect(output).toMatchSnapshot();
    });
});