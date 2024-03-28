import { render, screen, fireEvent } from '@testing-library/react';
import Org from '../pages/org_dashboard';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'

describe(("Organization Tests: Navigation"), () => {
    test("Navigate to Org-Level Dashboard", () => {
        render(<App />);
        const dashboardBtn = screen.getByText('Organizational Dashboard');
        fireEvent.click(dashboardBtn);

        expect(window.location.pathname).toBe('/org_dashboard');
    });
});

describe(("Organization Tests: Charts"), () => {
    beforeEach(() => {
        render(<Org />);
    });

    test("Impact Chart for Present", () => {
        const areaChart = screen.getByTestId("impact-chart");
        expect(areaChart).toBeInTheDocument;
    });

    test("Fever Chart is Present", () => {
        const polarChart = screen.getByTestId("fever-chart");
        expect(polarChart).toBeInTheDocument;
    });
});

