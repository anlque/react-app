import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
