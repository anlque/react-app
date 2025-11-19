import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/prodivers/ThemeProvider';

export const ThemeDecorator: Decorator = (StoryComponent, context) => {
    const theme = context.globals.theme as Theme;
    return (
        <ThemeProvider>
            <div className={`app ${theme}`} style={{ padding: '10px' }}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
