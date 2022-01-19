import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import GameCardSlider from '.';

const items = [
  {
    title: 'Item 1',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Item 2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/301x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Item 3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/302x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Item 4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/303x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Item 5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/304x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Item 6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/305x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
];

describe('<GameCardSlider />', () => {
  it('should render the slider', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    const slick = container.querySelector('.slick-list');
    expect(slick).toBeInTheDocument();
  });

  it('should render with 4 active itens', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    const slicks = container.querySelectorAll('.slick-slide.slick-active');
    expect(slicks).toHaveLength(4);

    const item1 = screen.getByRole('heading', {
      name: /item 1/i,
      hidden: false,
    });

    const item4 = screen.getByRole('heading', {
      name: /item 4/i,
      hidden: false,
    });

    expect(item1).toBeInTheDocument();
    expect(item4).toBeInTheDocument();
  });

  it('should render arrows with white color by default', () => {
    renderWithTheme(<GameCardSlider items={items} />);

    const prevArrow = screen.getByLabelText(/previous games/i);
    const nextArrow = screen.getByLabelText(/next games/i);

    expect(prevArrow).toHaveStyle({ color: '#FAFAFA' });
    expect(nextArrow).toHaveStyle({ color: '#FAFAFA' });
  });

  it('should render arrows with black color if the color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="black" />);

    const prevArrow = screen.getByLabelText(/previous games/i);
    const nextArrow = screen.getByLabelText(/next games/i);

    expect(prevArrow).toHaveStyle({ color: '#030517' });
    expect(nextArrow).toHaveStyle({ color: '#030517' });
  });
});
