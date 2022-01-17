import Banner from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the title', () => {
    renderWithTheme(<Banner {...props} />);

    const title = screen.getByRole('heading', { name: /defy death/i });

    expect(title).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    renderWithTheme(<Banner {...props} />);

    const subtitle = screen.getByRole('heading', {
      name: /play the new crashLands season/i,
    });

    expect(subtitle).toBeInTheDocument();
  });

  it('should render the image', () => {
    renderWithTheme(<Banner {...props} />);

    const image = screen.getByRole('img', { name: /defy death/i });

    expect(image).toBeInTheDocument();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Best Seller"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/best seller/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ fontSize: '1.2rem', height: '2.6rem' });
  });
});
