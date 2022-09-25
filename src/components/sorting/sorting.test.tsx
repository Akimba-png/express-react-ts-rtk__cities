import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sorting } from './sorting';
import { SortingOptions } from '../../const';

const fakeOnSortingChange = jest.fn();

const renderHelper = () =>
  render(
    <Sorting
      currentSortType={SortingOptions.Popular}
      onSortingChange={fakeOnSortingChange}
    />
  );

describe('Component Sorting:', () => {
  it('should be in the document', () => {
    renderHelper();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  it('should open option list on form click', async () => {
    renderHelper();
    await userEvent.click(screen.getByTestId('form-id'));
    expect(screen.getByText(SortingOptions.HighPrice)).toBeInTheDocument();
  });

  it('should change state on user click', async () => {
    renderHelper();
    await userEvent.click(screen.getByTestId('form-id'));
    const itemElement = screen.getByText(SortingOptions.HighPrice);
    expect(itemElement).toBeInTheDocument();
    await userEvent.click(itemElement);
    expect(fakeOnSortingChange).toBeCalled();
  });
});
