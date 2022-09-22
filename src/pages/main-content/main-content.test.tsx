import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Offers } from '../../types/offer';
import MainContent from './main-content';
import { mockClientOffers } from '../../mock';
import { AppRoute, AuthorisationStatus, DEFAULT_CITY, SortingOptions } from '../../const';

const TEST_ID = 'card-id';

const mockStore = configureMockStore();
const renderHelper = (fakeOffers: Offers | []) => {
  const state = {
    data: {
      offers: fakeOffers,
      favoriteOffers: mockClientOffers,
    },
    interface: {
      activeFilter: DEFAULT_CITY,
      currentSortType: SortingOptions.Popular,
    },
    user: {
      isAuthorized: AuthorisationStatus.Auth,
    }
  };
  const store = mockStore(state);
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[AppRoute.Main]}>
        <MainContent />
      </MemoryRouter>
    </Provider>
  );
};


describe('Component MainContent:', () => {
  it('should be in the document', () => {
    renderHelper(mockClientOffers);
    expect(screen.getByTestId(TEST_ID)).toHaveClass('cities__place-card');
  });

  it('should render empty page if there are no offers in the city', () => {
    renderHelper([]);
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
