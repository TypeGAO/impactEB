import { render, screen, fireEvent } from '@testing-library/react';
import Pipeline from '../pages/pipeline_dashboard';
import App from '../App'

beforeEach(() => {
    render(<App />);
});


describe(("Project Tests"), () => {
    test("Navigate to Project-Level Dashboard", () => {
        const dashboardBtn = screen.getByText('Program Dashboard');
        fireEvent.click(dashboardBtn);
        const projectBtn = screen.getByText('Pipeline Dashboard')
        fireEvent.click(projectBtn);
        expect(window.location.pathname).toBe('/pipeline_dashboard');
    });
});
