import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Home from '.';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingGames: [gamesMock[0]],
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    const menu = screen.getByLabelText(/open menu/i);
    expect(menu).toBeInTheDocument();

    const news = screen.getByRole('heading', { name: /news/i });
    expect(news).toBeInTheDocument();

    const mostPopular = screen.getByRole('heading', { name: /most popular/i });
    expect(mostPopular).toBeInTheDocument();

    const upcomming = screen.getByRole('heading', { name: /upcomming/i });
    expect(upcomming).toBeInTheDocument();

    const freeGames = screen.getByRole('heading', { name: /free games/i });
    expect(freeGames).toBeInTheDocument();

    const footerContacts = screen.getByRole('heading', { name: /contact/i });
    expect(footerContacts).toBeInTheDocument();

    const allBanners = screen.getAllByText(/defy death/i);
    expect(allBanners).toHaveLength(3);

    const allCards = screen.getAllByText(/population zero/i);
    expect(allCards).toHaveLength(5);

    const allHighlights = screen.getAllByText(/read dead it’s back/i);
    expect(allHighlights).toHaveLength(3);
  });
});
