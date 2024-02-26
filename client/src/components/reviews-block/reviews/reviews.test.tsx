import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../../store/root-reducer';
import Reviews from './reviews';
import { mockClientComment } from '../../../mock';
import { AuthorisationStatus } from '../../../const';

const TEXT_MATCHER = 'Reviews';

const mockStore = configureMockStore();

const renderHelper = (state: State) => {
  const store = mockStore(state);
  render(
    <Provider store={store}>
      <Reviews reviewsData={[mockClientComment]} />
    </Provider>
  );
};

let fakeState = {
  user: {
    isAuthorized: AuthorisationStatus.Auth,
  },
} as State;

describe('Component Reviews:', () => {
  it('should be in the document', () => {
    renderHelper(fakeState);
    expect(screen.getByText(new RegExp(TEXT_MATCHER, 'i'))).toBeInTheDocument();
  });

  it('should render comment form when user is authorised', () => {
    renderHelper(fakeState);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should not render comment form when user is unauthorised', () => {
    fakeState = {
      user: {
        isAuthorized: AuthorisationStatus.NotAuth,
      },
    } as State;
    renderHelper(fakeState);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
});
