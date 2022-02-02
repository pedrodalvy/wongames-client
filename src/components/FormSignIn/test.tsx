import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();

    const formButton = screen.getByRole('button', { name: /sign in now/i });
    expect(formButton).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    const forgotPasswordLink = screen.getByRole('link', {
      name: /forgot your password\?/i,
    });

    expect(forgotPasswordLink).toBeInTheDocument();
  });

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />);

    const signUpText = screen.getByText(/don’t have an account\?/i);
    expect(signUpText).toBeInTheDocument();

    const signUpLink = screen.getByRole('link', {
      name: /sign up/i,
    });

    expect(signUpLink).toBeInTheDocument();
  });
});
