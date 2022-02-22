import 'match-media-mock';
import Home from '.';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { makeBannersMock } from 'components/BannerSlider/mock';
import { makeGameCardsMock } from 'components/GameCardSlider/mock';
import { makeHighlightMock } from 'components/Highlight/mock';

const props = {
  banners: makeBannersMock({ total: 3 }),
  newGames: makeGameCardsMock({ total: 1 }),
  mostPopularHighlight: makeHighlightMock({ withFloatImage: true }),
  mostPopularGames: makeGameCardsMock({ total: 1 }),
  upcommingHighlight: makeHighlightMock({}),
  upcommingGames: makeGameCardsMock({ total: 1 }),
  upcommingMoreGames: makeGameCardsMock({ total: 1 }),
  freeGames: makeGameCardsMock({ total: 1 }),
  freeGamesHighlight: makeHighlightMock({}),
};

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="Mock Menu" />,
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="Mock Footer" />,
  };
});

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="Mock Showcase" />,
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="Mock BannerSlider" />,
  };
});

describe('<Home />', () => {
  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    const menu = screen.getByTestId('Mock Menu');
    expect(menu).toBeInTheDocument();

    const banner = screen.getByTestId('Mock BannerSlider');
    expect(banner).toBeInTheDocument();

    const showcase = screen.getAllByTestId('Mock Showcase');
    expect(showcase).toHaveLength(5);

    const footer = screen.getByTestId('Mock Footer');
    expect(footer).toBeInTheDocument();
  });
});
