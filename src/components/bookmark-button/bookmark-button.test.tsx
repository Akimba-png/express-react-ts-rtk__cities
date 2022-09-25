import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { redirectToPage } from '../../store/action';
import BookmarkButton from './bookmark-button';
import { AppRoute } from '../../const';

const FAKE_OFFER_ID = 1;
const fakeState = {
  data: {
    favoriteOffers: [],
  },
  user: {
    isAuthorized: false,
  },
};
const mockStore = configureMockStore();

const store = mockStore(fakeState);

const renderComponent = () => {
  render(
    <Provider store={store} >
      <BookmarkButton id={FAKE_OFFER_ID}/>
    </Provider>
  );
  return screen.getByRole('button');
};

describe('Component Bookmark-button:', () => {

  it('should be in the document', () => {
    const view = renderComponent();
    expect(view).toBeInTheDocument();
  });

  it('should redirect on page SignIn if user is unAuthorized', async () => {
    const view = renderComponent();
    await userEvent.click(view);
    expect(store.getActions()).toEqual([redirectToPage(AppRoute.SignIn)]);
  });
});

