import type { Meta, StoryObj } from '@storybook/vue3';

import TestGreeting from '../TestGreeting.vue';

// CONFIGURATION
const meta = {
  title: 'Example/TestGreeting',
  component: TestGreeting,
  tags: ['autodocs'],
} satisfies Meta<typeof TestGreeting>;

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
