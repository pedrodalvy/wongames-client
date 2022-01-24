import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';
import Radio from '.';

describe('<Radio />', () => {
  it('should render with label white by default', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="any value" />
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: '#FAFAFA' });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with label black', () => {
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="check"
        value="any value"
        labelColor="black"
      />
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: '#030517' });
  });

  it('should render without label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="any value"
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    const radio = screen.getByLabelText('Radio');
    userEvent.click(radio);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
      expect(onCheck).toHaveBeenCalledWith('any value');
    });
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />);

    const radio = screen.getByLabelText('Radio');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(radio).toHaveFocus();
  });
});
