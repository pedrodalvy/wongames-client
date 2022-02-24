import { screen } from '@testing-library/react';
import GameDetails from 'components/GameDetails';
import { gameDetailsMock } from 'components/GameDetails/mock';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    const developerBlock = screen.getByText(/developer/i);
    expect(developerBlock).toBeInTheDocument();

    const releaseDateBlock = screen.getByText(/release date/i);
    expect(releaseDateBlock).toBeInTheDocument();

    const platformsBlock = screen.getByText(/platforms/i);
    expect(platformsBlock).toBeInTheDocument();

    const publisherBlock = screen.getByText(/publisher/i);
    expect(publisherBlock).toBeInTheDocument();

    const ratingBlock = screen.getByText(/rating/i);
    expect(ratingBlock).toBeInTheDocument();

    const genresBlock = screen.getByText(/genres/i);
    expect(genresBlock).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    const macIcon = screen.getByRole('img', { name: /mac/i });
    expect(macIcon).toBeInTheDocument();

    const linuxIcon = screen.getByRole('img', { name: /linux/i });
    expect(linuxIcon).toBeInTheDocument();

    const windowsIcon = screen.getByRole('img', { name: /windows/i });
    expect(windowsIcon).toBeInTheDocument();
  });

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    const releaseDate = screen.getByText(/nov 21, 2020/i);
    expect(releaseDate).toBeInTheDocument();
  });
});
