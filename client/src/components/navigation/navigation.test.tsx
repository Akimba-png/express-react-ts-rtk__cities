import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Navigation from './navigation';
import { appUser } from './../../store/app-user/app-user';
import { AppRoute, AuthorisationStatus } from '../../const';

const NOT_AUTHORISED_MATCHER = 'Sign in';
const AUTHORISED_MATCHER = 'Sign out';
const DATA_LINK_ID = 'navigation-id';
const FAKE_PAGE = 'Favorite page';
const FAKE_PATH = '/nav';

type FakeData = ReturnType<typeof appUser>;
let fakeData: FakeData;

const mockStore = configureMockStore();

const renderHelper = (state: FakeData) => {
  const fakeState = {
    user: state,
  };
  const store = mockStore(fakeState);
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/nav']}>
        <Routes>
          <Route path={FAKE_PATH} element={<Navigation />} />
          <Route path={AppRoute.Favorites} element={<h1>{FAKE_PAGE}</h1>} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe('Component Navigation:', () => {
  it('to be in the document', () => {
    fakeData = {
      isAuthorized: AuthorisationStatus.Unknow,
      userEmail: '',
    };
    renderHelper(fakeData);
    expect(screen.getByText(NOT_AUTHORISED_MATCHER)).toBeInTheDocument();
  });

  it('should have login link when user is unauthorised', () => {
    fakeData = {
      isAuthorized: AuthorisationStatus.NotAuth,
      userEmail: '',
    };
    renderHelper(fakeData);
    expect(screen.getByText(NOT_AUTHORISED_MATCHER)).toBeInTheDocument();
  });

  it('should have logout link when user is authorised', () => {
    fakeData = {
      isAuthorized: AuthorisationStatus.Auth,
      userEmail: '',
    };
    renderHelper(fakeData);
    expect(screen.getByText(AUTHORISED_MATCHER)).toBeInTheDocument();
  });

  it('should link on Favorite Page on user click', async () => {
    fakeData = {
      isAuthorized: AuthorisationStatus.Auth,
      userEmail: '',
    };
    renderHelper(fakeData);
    await userEvent.click(screen.getByTestId(DATA_LINK_ID));
    expect(screen.getByText(FAKE_PAGE)).toBeInTheDocument();
  });
});
