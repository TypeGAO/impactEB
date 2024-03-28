import { render, screen, fireEvent } from '@testing-library/react';
import Program from '../pages/program_dashboard';
import App from '../App'

beforeEach(() => {
    render(<App />);
});



describe(("Program Tests"), () => {
    test("Navigate to Program-Level Dashboard", () => {
        const dashboardBtn = screen.getByText('Program Dashboard');
        fireEvent.click(dashboardBtn);
        expect(window.location.pathname).toBe('/program_dashboard');
    });
});