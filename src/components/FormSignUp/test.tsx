import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />);

    const nameInput = screen.getByPlaceholderText(/name/i);
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText(/^password/i);
    expect(passwordInput).toBeInTheDocument();

    const confirmPassInput = screen.getByPlaceholderText(/^confirm password/i);
    expect(confirmPassInput).toBeInTheDocument();

    const formButton = screen.getByRole('button', { name: /sign up now/i });
    expect(formButton).toBeInTheDocument();
  });

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />);

    const signUpText = screen.getByText(/already have an account\?/i);
    expect(signUpText).toBeInTheDocument();

    const signInLink = screen.getByRole('link', {
      name: /sign in/i,
    });

    expect(signInLink).toBeInTheDocument();
  });
});
