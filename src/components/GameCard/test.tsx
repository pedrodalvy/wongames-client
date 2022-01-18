import { fireEvent, screen } from '@testing-library/react';
import GameCard from 'components/GameCard';
import { renderWithTheme } from 'utils/tests/helpers';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/population-zero-img.jpg',
  price: 'R$ 215,00',
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    const title = screen.getByRole('heading', { name: props.title });
    expect(title).toBeInTheDocument();

    const developer = screen.getByRole('heading', { name: props.developer });
    expect(developer).toBeInTheDocument();

    const image = screen.getByRole('img', { name: props.title });
    expect(image).toBeInTheDocument();

    const favoriteButton = screen.getByLabelText(/add to wishlist/i);
    expect(favoriteButton).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(props.price);

    expect(price).toBeInTheDocument();
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' });
  });

  it('should render a line-trough in price when promotional', () => {
    renderWithTheme(
      <GameCard {...props} price="R$ 200,00" promotionalPrice="R$ 15,00" />
    );

    const price = screen.getByText('R$ 200,00');
    const promotional = screen.getByText('R$ 15,00');

    expect(price).toBeInTheDocument();
    expect(price).toHaveStyle({ textDecoration: 'line-through' });

    expect(promotional).toBeInTheDocument();
    expect(promotional).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(promotional).toHaveStyle({ backgroundColor: '#3CD3C1' });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    const favoriteButton = screen.getByLabelText(/remove from wishlist/i);
    expect(favoriteButton).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} onFavorite={onFav} />);

    const favoriteButton = screen.getByLabelText(/add to wishlist/i);
    fireEvent.click(favoriteButton);

    expect(onFav).toBeCalled();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="10% off"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/10% off/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ fontSize: '1.2rem', height: '2.6rem' });
  });
});
