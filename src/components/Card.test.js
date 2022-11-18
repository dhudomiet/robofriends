import React from 'react';
import Card from './Card';
import {render, screen} from '@testing-library/react';


describe('Card', () => {
    test('renders Card component', () => {
        const output = render(<Card />);
        expect(output).toMatchSnapshot();
    });
});