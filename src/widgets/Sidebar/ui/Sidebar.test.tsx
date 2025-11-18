import { Sidebar } from 'widgets/Sidebar';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Button', () => {
    test('should render sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should toggle open', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
