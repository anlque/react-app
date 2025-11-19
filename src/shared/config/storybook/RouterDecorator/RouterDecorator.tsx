import 'app/styles/index.scss';

import type { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router';

export const RouterDecorator: Decorator = (StoryComponent) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
};
