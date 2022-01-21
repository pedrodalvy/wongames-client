import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Home from '.';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingGames: gamesMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeGamesHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    const footerContacts = screen.getByRole('heading', { name: /contact/i });
    expect(footerContacts).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    const news = screen.getByRole('heading', { name: /news/i });
    expect(news).toBeInTheDocument();

    const mostPopular = screen.getByRole('heading', { name: /most popular/i });
    expect(mostPopular).toBeInTheDocument();

    const upcomming = screen.getByRole('heading', { name: /upcomming/i });
    expect(upcomming).toBeInTheDocument();

    const freeGames = screen.getByRole('heading', { name: /free games/i });
    expect(freeGames).toBeInTheDocument();
  });
});
