import Main from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate Storybook',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

export const Default: Story = (args) => <Main {...args} />;
Default.args = {
  title: 'Boilerplate NextJS',
};
