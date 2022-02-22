import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Base from '.';

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

describe('<Base />', () => {
  it('should render menu, children and footer', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );

    const menu = screen.getByTestId('Mock Menu');
    expect(menu).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /heading/i });
    expect(heading).toBeInTheDocument();

    const footer = screen.getByTestId('Mock Footer');
    expect(footer).toBeInTheDocument();
  });
});
