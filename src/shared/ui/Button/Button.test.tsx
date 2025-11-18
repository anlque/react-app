import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';
import { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('should render button', () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    test('should add theme class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass(ThemeButton.CLEAR);
    });
});
