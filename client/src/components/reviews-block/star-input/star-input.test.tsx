import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StarInput, { StarInputProps } from './star-input';

const fakeClickHandler = jest.fn();

let fakeStarInputProps: StarInputProps = {
  rating: 2,
  title: 'exciting',
  currentValue: '3',
  onInputClick: fakeClickHandler,
};

describe('Component StarInput:', () => {
  it('should be in the document', () => {
    render(<StarInput {...fakeStarInputProps} />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('should not be checked without interaction', () => {
    render(<StarInput {...fakeStarInputProps} />);
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  it('shoult change parent state on user click', async () => {
    render(<StarInput {...fakeStarInputProps} />);
    await userEvent.click(screen.getByRole('radio'));
    expect(fakeClickHandler).toBeCalled();
  });

  it('should be checked after user interaction', () => {
    fakeStarInputProps = {
      rating: 2,
      title: 'exciting',
      currentValue: '2',
      onInputClick: fakeClickHandler,
    };
    render(<StarInput {...fakeStarInputProps} />);
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
