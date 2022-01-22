import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';
import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />
    );

    const checkbox = screen.getByRole('checkbox');
    const checkboxLabel = screen.getByLabelText(/checkbox label/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkboxLabel).toBeInTheDocument();

    const label = screen.getByText(/checkbox label/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'check');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label if no passed', () => {
    renderWithTheme(<Checkbox />);

    const checkboxLabel = screen.queryByLabelText('Checkbox');
    expect(checkboxLabel).not.toBeInTheDocument();

    const label = screen.queryByText('Checkbox');
    expect(label).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    );

    const label = screen.getByText(/checkbox label/i);
    expect(label).toHaveStyle({ color: '#030517' });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
      expect(onCheck).toHaveBeenCalledWith(true);
    });
  });

  it('should dispatch onCheck with false when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox onCheck={onCheck} isChecked />);

    expect(onCheck).not.toHaveBeenCalled();

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
      expect(onCheck).toHaveBeenCalledWith(false);
    });
  });

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveFocus();
  });
});
