import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './private-route';
import { AppRoute, AuthorisationStatus } from '../../const';

const PRIVATE_PAGE = 'Private page';
const SIGNIN_PAGE = 'Signin page';
const mockStore = configureMockStore();

const renderHelper = (authorisationStatus: AuthorisationStatus) => {
  const fakeState = {
    user: {
      isAuthorized: authorisationStatus,
    },
  };
  const store = mockStore(fakeState);
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[AppRoute.Favorites]}>
        <Routes>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <h1>{PRIVATE_PAGE}</h1>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.SignIn} element={<h1>{SIGNIN_PAGE}</h1>} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe('Component PrivateRoute:', () => {
  it('should render private page when user is authorised', () => {
    renderHelper(AuthorisationStatus.Auth);
    expect(screen.getByText(PRIVATE_PAGE)).toBeInTheDocument();
  });

  it('should render login page if user is unauthorised', () => {
    renderHelper(AuthorisationStatus.NotAuth);
    expect(screen.getByText(SIGNIN_PAGE)).toBeInTheDocument();
  });
});
