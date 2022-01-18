import { Meta, Story } from '@storybook/react';
import Ribbon, { RibbonProps } from 'components/Ribbon';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
    }}
  >
    <Ribbon {...args} />
  </div>
);