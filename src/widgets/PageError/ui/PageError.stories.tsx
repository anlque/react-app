import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
