import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { fakeState } from '../../test/helper/fake-store';
import Room from './room';
import {
  mockClientOffer,
  mockClientOffers,
  mockClientComments,
} from './../../mock';

const FAKE_URL = '/offer/1';
const TEST_ID = 'card-id';
const TEXT_MATCHER = 'Meet the host';
const CLASS_MATCHER = 'near-places__card';

const mockStore = configureMockStore();
const store = mockStore(fakeState);

jest.mock('./../../hooks/use-assync.ts', () => ({
  __esModule: true,
  useAssync: () => [mockClientOffer, mockClientOffers, mockClientComments],
}));

const renderHelper = () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[FAKE_URL]}>
        <Room />
      </MemoryRouter>
    </Provider>
  );
};

describe('Component Room:', () => {
  it('should be in the document', () => {
    renderHelper();
    expect(screen.getByText(TEXT_MATCHER)).toBeInTheDocument();
  });

  it('should have correct style', () => {
    renderHelper();
    expect(screen.getByTestId(TEST_ID)).toHaveClass(CLASS_MATCHER);
  });
});
