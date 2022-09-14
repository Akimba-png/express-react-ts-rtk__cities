import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filter } from './filter';
import { renderTestComponent as render } from '../../test/helper/render-test-component';
import { DEFAULT_CITY } from '../../const';

const TEST_ID = 'link-id-0';
const ACTIVE_CLASS = 'tabs__item--active';
const FN_CALLS_COUNT = 1;

describe('component Filter:', () => {
  let mockFn: ReturnType<typeof jest.fn>;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('should be in the document', () => {
    render(<Filter activeFilter='' onFilterChange={mockFn}/>);
    expect(screen.getByText(DEFAULT_CITY)).toBeInTheDocument();
  });

  it('should have active status on correct item', () => {
    render(<Filter activeFilter={DEFAULT_CITY} onFilterChange={mockFn} />);
    expect(screen.getByTestId(TEST_ID)).toHaveClass(ACTIVE_CLASS);
  });

  it('should call received function on user click', async () => {
    render(<Filter activeFilter={DEFAULT_CITY} onFilterChange={mockFn} />);
    const linkView = screen.getByTestId(TEST_ID);
    await userEvent.click(linkView);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(FN_CALLS_COUNT);
  });
});
