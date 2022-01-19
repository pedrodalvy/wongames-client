import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import BannerSlider from '.';

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Item 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling',
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Item 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
];

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    const slick = container.querySelector('.slick-vertical');
    expect(slick).toBeInTheDocument();
  });

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    const sliders = container.querySelectorAll('.slick-slide');
    expect(sliders).toHaveLength(2);

    const activeSliders = container.querySelectorAll('li.slick-active');
    expect(activeSliders).toHaveLength(1);

    const item1 = screen.getByRole('heading', {
      name: /item 1/i,
      hidden: false,
    });

    const item2 = screen.getByRole('heading', {
      name: /item 2/i,
      hidden: true,
    });

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it('should render the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    const dots = container.querySelectorAll('.slick-dots li button');
    expect(dots).toHaveLength(2);
  });
});
