import Footer from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />);

    const contacts = screen.getByRole('heading', { name: /contact/i });
    expect(contacts).toBeInTheDocument();

    const followUs = screen.getByRole('heading', { name: /follow us/i });
    expect(followUs).toBeInTheDocument();

    const links = screen.getByRole('heading', { name: /links/i });
    expect(links).toBeInTheDocument();

    const location = screen.getByRole('heading', { name: /location/i });
    expect(location).toBeInTheDocument();
  });
});
