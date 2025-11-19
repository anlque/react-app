import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: {
            control: { type: 'radio' },
            options: [ThemeButton.CLEAR, ThemeButton.OUTLINE],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Test',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Test',
    },
};

export const Outlined: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Test',
    },
};
