import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from 'styled-icons/material-outlined';
import { renderWithTheme } from 'utils/tests/helpers';
import TextField from '.';

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    const input = screen.getByLabelText('Label');
    expect(input).toBeInTheDocument();
  });

  it('should render without label', () => {
    renderWithTheme(<TextField />);

    const input = screen.queryByLabelText('Label');
    expect(input).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="Lorem ipsum" />);

    const input = screen.getByPlaceholderText('Lorem ipsum');
    expect(input).toBeInTheDocument();
  });

  it('should render with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render with icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    );

    const icon = screen.getByTestId('icon');
    expect(icon.parentElement).toHaveStyle({ order: 1 });
  });

  it('should changes its values when typing', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'Lorem ipsum';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
      expect(onInput).toHaveBeenCalledWith(text);
    });
  });

  it('should not changes its value when disabled', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'Lorem ipsum';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
      expect(onInput).not.toHaveBeenCalled();
    });
  });

  it('should render with error', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error Message"
      />
    );

    const message = screen.getByText('Error Message');
    expect(message).toBeInTheDocument();
  });

  it('should be accessible with tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should not be accessible with tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
