import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
