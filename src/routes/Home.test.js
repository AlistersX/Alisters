import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import React from 'react';

describe('home page', () => {

    test('home page should render', () => {
        render(<Home />)
    });

    test('homepage should render text', () => {
        render(<Home />)

        expect(screen.getByText('Directory')).toBeInTheDocument()
    });
});
