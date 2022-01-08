import Menu from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { fireEvent, screen } from '@testing-library/react';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  test('makes sure the mobile menu starts hidden', () => {
    renderWithTheme(<Menu />);
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  test('ensures that when clicking in the Open Menu, the mobile menu opens', () => {
    renderWithTheme(<Menu />);
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });
  });

  test('ensures that when clicking in the Close Menu, the mobile menu closes', () => {
    renderWithTheme(<Menu />);
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
