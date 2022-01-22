import { BannerProps } from 'components/Banner';

type MockProps = {
  total: number;
};

export const makeBannersMock = ({ total }: MockProps): BannerProps[] => {
  const banners = [];

  for (let i = 1; i <= total; i++) {
    banners.push({
      img: `https://source.unsplash.com/user/willianjusten/1042x58${i}`,
      title: `Defy death ${i}`,
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death',
      ribbon: 'Bestselling',
    });
  }

  return banners;
};
