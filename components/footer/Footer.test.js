import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Footer from './Footer';
describe('Footer Component', () => {
    test('renders the component correctly', () => {
        const { container } = render(<Footer />);
        const footerWrapper = container.querySelector('.footerWrapper');
        const footerList = container.querySelector('.footerList');

        expect(footerWrapper).toBeInTheDocument();
        expect(footerList).toBeInTheDocument();
    });
    test('renders the correct footer information', () => {
        const { getByText } = render(<Footer />);

        expect(getByText('this is the footer')).toBeInTheDocument();
        expect(getByText('it will have important footer information')).toBeInTheDocument();
    });

});