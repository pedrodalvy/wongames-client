import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Auth from '.';

describe('<Auth />', () => {
  it('should render 2 logos', () => {
    renderWithTheme(<Auth title="any">Any</Auth>);

    const logos = screen.getAllByRole('img', { name: /Won Games/i });

    expect(logos).toHaveLength(2);
  });

  it('should render titles', () => {
    renderWithTheme(<Auth title="Auth Title">Any</Auth>);

    const titleBanner = screen.getByRole('heading', {
      name: /all your favorite games in one place/i,
    });

    const subtitle = screen.getByRole('heading', {
      name: /won is the best and most complete gaming platform./i,
    });

    const titleContent = screen.getByRole('heading', { name: /auth title/i });

    expect(titleBanner).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(titleContent).toBeInTheDocument();
  });

  it('should render children', () => {
    renderWithTheme(
      <Auth title="any">
        <input type="text" />
      </Auth>
    );

    const children = screen.getByRole('textbox');

    expect(children).toBeInTheDocument();
  });

  it('should render footer', () => {
    renderWithTheme(<Auth title="any">Any</Auth>);

    const footer = screen.getByText(
      'Won Games 2020 © Todos os Direitos Reservados'
    );

    expect(footer).toBeInTheDocument();
  });
});
