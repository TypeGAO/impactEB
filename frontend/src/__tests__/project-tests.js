import { render, screen, fireEvent } from '@testing-library/react';
import Project from '../pages/project_dashboard';
import App from '../App'

beforeEach(() => {
    render(<App />);
});


describe(("Project Tests"), () => {
    test("Navigate to Project-Level Dashboard", () => {
        const dashboardBtn = screen.getByText('Program Dashboard');
        fireEvent.click(dashboardBtn);
        const projectBtn = screen.getByText('Project Dashboard')
        fireEvent.click(projectBtn);
        expect(window.location.pathname).toBe('/project_dashboard');
    });
});
