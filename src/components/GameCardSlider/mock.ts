import { GameCardProps } from 'components/GameCard';

type MockProps = {
  total: number;
};

export const makeGameCardsMock = ({ total }: MockProps): GameCardProps[] => {
  const games = [];

  for (let i = 1; i <= total; i++) {
    games.push({
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: `https://source.unsplash.com/user/willianjusten/305x14${i}`,
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00',
    });
  }

  return games;
};
