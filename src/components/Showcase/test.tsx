import 'match-media-mock';
import { screen } from '@testing-library/react';
import Showcase from '.';
import { renderWithTheme } from 'utils/tests/helpers';

import { makeGameCardsMock } from 'components/GameCardSlider/mock';
import { makeHighlightMock } from 'components/Highlight/mock';

const props = {
  title: 'Most Popular',
  highlight: makeHighlightMock({ withFloatImage: true }),
  games: makeGameCardsMock({ total: 1 }),
};

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />);

    const heading = screen.getByRole('heading', { name: /most popular/i });
    expect(heading).toBeInTheDocument();

    const highlight = screen.getByRole('heading', {
      name: props.highlight.title,
    });
    expect(highlight).toBeInTheDocument();

    const game = screen.getByRole('heading', { name: props.games[0].title });
    expect(game).toBeInTheDocument();
  });

  it('should render without title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    );

    screen.getByRole('heading', { name: props.highlight.title });
    screen.getByRole('heading', { name: props.games[0].title });

    const heading = screen.queryByRole('heading', { name: /most popular/i });
    expect(heading).not.toBeInTheDocument();
  });

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />);

    screen.getByRole('heading', { name: /most popular/i });
    screen.getByRole('heading', { name: props.games[0].title });

    const highlight = screen.queryByRole('heading', {
      name: props.highlight.title,
    });
    expect(highlight).not.toBeInTheDocument();
  });

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    );

    screen.getByRole('heading', { name: /most popular/i });
    screen.getByRole('heading', { name: props.highlight.title });

    const games = screen.queryByRole('heading', { name: props.games[0].title });
    expect(games).not.toBeInTheDocument();
  });
});
