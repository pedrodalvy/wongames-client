import Highlight, { HighlightProps } from 'components/Highlight';
import { Meta, Story } from '@storybook/react';
import { makeHighlightMock } from 'components/Highlight/mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...makeHighlightMock({}) },
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  ...makeHighlightMock({ withFloatImage: true }),
};
