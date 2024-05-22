import type { Meta, StoryObj } from '@storybook/vue3';

import Greeting from './Greeting.vue';

// CONFIGURATION
const meta = {
    title: 'components/Greeting',
    component: Greeting,
    tags: ['autodocs'],
} satisfies Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof meta>;

// STORIES
export const Default: Story = {
    args: {},
};

export const HelloWorld: Story = {
    args: {
        name: 'World',
    },
};
