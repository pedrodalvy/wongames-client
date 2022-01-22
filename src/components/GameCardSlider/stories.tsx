import { Story, Meta } from '@storybook/react';
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import { makeGameCardsMock } from 'components/GameCardSlider/mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items: makeGameCardsMock({ total: 6 }) },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
