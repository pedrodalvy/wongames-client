import { Story, Meta } from '@storybook/react';
import { makeGameCardsMock } from 'components/GameCardSlider/mock';
import { makeHighlightMock } from 'components/Highlight/mock';
import Showcase, { ShowcaseProps } from 'components/Showcase';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: makeHighlightMock({ withFloatImage: true }),
  games: makeGameCardsMock({ total: 10 }),
};

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutTitle.args = {
  highlight: makeHighlightMock({ withFloatImage: true }),
  games: makeGameCardsMock({ total: 10 }),
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHighlight.args = {
  title: 'Most Popular',
  games: makeGameCardsMock({ total: 10 }),
};

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutGames.args = {
  title: 'Most Popular',
  highlight: makeHighlightMock({ withFloatImage: true }),
};
