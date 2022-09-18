import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { OfferServer } from '../../types/offer';
import { State } from '../../store/root-reducer';
import Favorites from './favorites';
import { mockStore, mockApi, fakeState } from '../../test/helper/fake-store';
import { mockServerOffers } from '../../mock';
import { ApiRoute, StatusCode } from '../../const';

const TEXT_MATCHER = 'Saved listing';
const EMPTY_TEXT_MATCHER = 'Nothing yet saved.';

const renderHelper = (state: State, serverReply: OfferServer[] | []) => {
  const store = mockStore(state);
  mockApi.onGet(ApiRoute.Favorites).reply(StatusCode.Success, serverReply);
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    </Provider>
  );
};

describe('Component Favorites:', () => {

  it('should be in the document', () => {
    renderHelper(fakeState, mockServerOffers);
    expect(screen.getByText(TEXT_MATCHER)).toBeInTheDocument();
  });

  it('should render empty page if there are no favorite offer', () => {
    fakeState.data.favoriteOffers = [];
    renderHelper(fakeState, []);
    expect(screen.getByText(EMPTY_TEXT_MATCHER)).toBeInTheDocument();
  });
});
