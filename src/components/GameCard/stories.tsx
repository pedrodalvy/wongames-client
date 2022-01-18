import { Story, Meta } from '@storybook/react';
import GameCard, { GameCardProps } from 'components/GameCard';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.jpg',
    price: 'R$ 200,00',
  },
  argTypes: {
    ribbon: { type: 'string' },
    onFavorite: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  promotionalPrice: 'R$ 100,00',
  ribbon: '50% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
};
