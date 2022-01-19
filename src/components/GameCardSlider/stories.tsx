import { Story, Meta } from '@storybook/react';
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/301x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/302x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/303x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/304x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/305x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
];

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
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
