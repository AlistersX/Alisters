import { render, screen} from '@testing-library/react';
import { Home } from './Home';
import React from 'react';
import { ThemeContext } from '../ThemeContent';

describe('home page', () => {

    test('home page should render', () => {
        render(
        <ThemeContext.Provider value={{dark: ()=>{}}}>
            <Home />
            </ThemeContext.Provider>)
    });

    test('homepage should render text', () => {
        render(<ThemeContext.Provider value={{dark: ()=>{}}}>
            <Home />
            </ThemeContext.Provider>)

        expect(screen.getByText('Directory')).toBeInTheDocument()
    });
});