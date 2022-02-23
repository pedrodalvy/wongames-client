import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import GameInfo from '.';

const props = {
  title: 'The Last of Us Part II',
  description: 'Description of The Last of Us Part II',
  price: '150.00',
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    const title = screen.getByRole('heading', { name: props.title });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(props.description);
    expect(description).toBeInTheDocument();

    const price = screen.getByText(`$${props.price}`);
    expect(price).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    const wishlistButton = screen.getByRole('button', { name: 'Wishlist' });
    expect(wishlistButton).toBeInTheDocument();

    const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
    expect(addToCartButton).toBeInTheDocument();
  });
});
