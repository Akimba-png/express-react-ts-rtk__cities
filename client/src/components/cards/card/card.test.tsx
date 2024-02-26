import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Card from './card';
import { mockClientOffer } from './../../../mock';
import { AppRoute, FAKE_CONTENT } from '../../../const';


const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOnMouseEvent = jest.fn();
enum FakeCardStyle {
  Article = 'cities__place-card',
  Wrapper = 'cities__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}
const fakeState = {
  data: {
    favoriteOffers: [],
  },
  user: {
    isAuthorized: false,
  },
};

const store = mockStore(fakeState);

const renderComponent = () => render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path={AppRoute.Room} element={<h1>{FAKE_CONTENT}</h1>} />
        <Route path={'*'} element={
          <Card
            cardStyle={FakeCardStyle}
            hotelData={mockClientOffer}
            onMouseEvent={fakeOnMouseEvent}
          />
        }
        />
      </Routes>
    </HistoryRouter>
  </Provider>
);

describe('Component Card:', () => {
  it('should be in the document', () => {
    renderComponent();
    expect(screen.getByAltText('Place to rent')).toBeInTheDocument();
  });

  it('should render offer Page on user click on Card', async () => {
    renderComponent();
    expect(screen.getByAltText('Place to rent')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('card-link'));
    expect(screen.getByText(FAKE_CONTENT)).toBeInTheDocument();
  });
});
