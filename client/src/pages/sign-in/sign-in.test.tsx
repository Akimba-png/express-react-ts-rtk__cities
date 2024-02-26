import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen,act } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import SignIn from './sign-in';
import { AppRoute, AuthorisationStatus, SignInInvalidText } from '../../const';
import userEvent from '@testing-library/user-event';


enum Placeholder {
  Email = 'Email',
  Password = 'Password',
}

enum InputValue {
  EmailCorrect = 'test@test.ru',
  PasswordCorrect = '1s',
  Incorrect = 'test',
}

const TEXT_MATCHER = 'Main page';

const mockStore = configureMockStore();

const renderHelper = (authStatus: AuthorisationStatus) => {
  const fakeState = {
    user: {
      isAuthorized: authStatus,
    },
  };
  const store = mockStore(fakeState);
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[AppRoute.SignIn]}>
        <Routes>
          <Route path={AppRoute.SignIn} element={<SignIn />} />
          <Route path={AppRoute.Main} element={<h1>Main page</h1>} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe('Component SignIn:', () => {

  it('should be in the document', () => {
    renderHelper(AuthorisationStatus.NotAuth);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render main page when user is authorised', () => {
    renderHelper(AuthorisationStatus.Auth);
    expect(screen.getByText(TEXT_MATCHER)).toBeInTheDocument();
  });

  it('should display typed text', async () => {
    const user = userEvent.setup();
    renderHelper(AuthorisationStatus.NotAuth);
    const inputEmailElement = screen.getByPlaceholderText(Placeholder.Email);
    const inputPasswordElement = screen.getByPlaceholderText(Placeholder.Password);
    expect(inputEmailElement).toHaveValue('');
    expect(inputPasswordElement).toHaveValue('');
    await user.type(inputEmailElement, InputValue.EmailCorrect);
    await user.type(inputPasswordElement, InputValue.PasswordCorrect);
    expect(inputEmailElement).toHaveValue(InputValue.EmailCorrect);
    expect(inputPasswordElement).toHaveValue(InputValue.PasswordCorrect);
  });

  it('should render error text on wrong input', async () => {
    const user = userEvent.setup();
    renderHelper(AuthorisationStatus.NotAuth);
    const inputEmailElement = screen.getByPlaceholderText(Placeholder.Email);
    const inputPasswordElement = screen.getByPlaceholderText(Placeholder.Password);
    expect(inputEmailElement).toHaveValue('');
    expect(inputPasswordElement).toHaveValue('');
    await user.type(inputEmailElement, InputValue.Incorrect);
    act(() => inputEmailElement.blur());
    expect(screen.getByText(SignInInvalidText.Login)).toBeInTheDocument();
  });

  it('should enabled submit button on correct inputs', async () => {
    const user = userEvent.setup();
    renderHelper(AuthorisationStatus.NotAuth);
    const inputEmailElement = screen.getByPlaceholderText(Placeholder.Email);
    const inputPasswordElement = screen.getByPlaceholderText(Placeholder.Password);
    expect(inputEmailElement).toHaveValue('');
    expect(inputPasswordElement).toHaveValue('');
    await user.type(inputEmailElement, InputValue.EmailCorrect);
    await user.type(inputPasswordElement, InputValue.PasswordCorrect);
    expect(screen.getByRole('button')).toBeEnabled();
  });
});
