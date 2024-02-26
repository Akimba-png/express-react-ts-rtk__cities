import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from './root-reducer';
import { createApi } from './../services/api';
import { requireAuthorization, setUserEmail } from './app-user/app-user';
import { Action, redirectToPage, setDataLoaded, setFavoriteOffers, setOffers } from './action';
import { authorise, checkAuthorization, loadFavoriteOffers, loadOffers, logout, switchFavoriteStatus } from './assync-action';
import { AUTHORISATION_TOKEN } from '../services/token';
import { mockServerOffers, mockClientOffers, mockTrueFavoriteOffer, mockFalseFavoriteOffer } from './../mock';
import { ApiRoute, AppRoute, AuthorisationStatus, StatusCode } from '../const';

const OFFER_ID = 1;
enum FavoriteStatus {
  True = 1,
  False = 0,
}
const FAKE_EMAIL = 'test@test.ru';

const fakeOnUnauthorized = jest.fn();
const api = createApi(fakeOnUnauthorized);
const mockApi = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

let store: ReturnType<typeof mockStore>;

describe('Assync action:', () => {

  beforeEach(() => {
    store = mockStore();
  });

  it('loadOffers should dispatch correct actions', async () => {
    mockApi.onGet(ApiRoute.Offers).reply(StatusCode.Success, mockServerOffers);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(loadOffers());
    expect(store.getActions()).toEqual([setOffers(mockClientOffers), setDataLoaded()]);
  });

  it('loadFavoriteOffers should dispatch correct action', async () => {
    expect(store.getActions()).toEqual([]);
    mockApi.onGet(ApiRoute.Favorites).reply(StatusCode.Success, mockServerOffers);
    await store.dispatch(loadFavoriteOffers());
    expect(store.getActions()).toEqual([setFavoriteOffers(mockClientOffers)]);
  });

  it('switchFavoriteStatus should dispatch action with favorite status: true payload', async () => {
    const mockState = {
      data: {
        favoriteOffers: [],
      },
    };
    store = mockStore(mockState);
    mockApi
      .onPost(`${ApiRoute.Favorites}${OFFER_ID}/${FavoriteStatus.True}`)
      .reply(StatusCode.Success, mockTrueFavoriteOffer);
    await store
      .dispatch(switchFavoriteStatus(OFFER_ID, FavoriteStatus.True, () => null));
    expect(store.getActions()).toEqual([setFavoriteOffers(mockClientOffers)]);
  });

  it('switchFavoriteStatus should dispatch action with empty array payload', async () => {
    const mockState = {
      data: {
        favoriteOffers: mockClientOffers,
      },
    };
    store = mockStore(mockState);
    mockApi
      .onPost(`${ApiRoute.Favorites}${OFFER_ID}/${FavoriteStatus.False}`)
      .reply(StatusCode.Success, mockFalseFavoriteOffer);
    await store
      .dispatch(switchFavoriteStatus(OFFER_ID, FavoriteStatus.False, () => null));
    expect(store.getActions()).toEqual([setFavoriteOffers([])]);
  });

  it('authorise should dispatch correct actions', async () => {
    const FAKE_TOKEN = 'token';
    const fakeResponse = { email: FAKE_EMAIL, token: FAKE_TOKEN };
    const mockAuthorisationData = { email: FAKE_EMAIL, password: '1t' };
    Storage.prototype.setItem = jest.fn();
    mockApi
      .onPost(ApiRoute.Login, mockAuthorisationData)
      .reply(StatusCode.Success, fakeResponse);
    mockApi.onGet(ApiRoute.Favorites).reply(StatusCode.Success, mockServerOffers);
    await store.dispatch(authorise(mockAuthorisationData));
    expect(store.getActions())
      .toEqual([
        setUserEmail('test@test.ru'),
        requireAuthorization(AuthorisationStatus.Auth),
        setFavoriteOffers(mockClientOffers),
        redirectToPage(AppRoute.Main),
      ]);
    expect(Storage.prototype.setItem).toBeCalled();
    expect(Storage.prototype.setItem).toBeCalledWith(AUTHORISATION_TOKEN, FAKE_TOKEN);
  });

  it('checkAuthorisation should dispatch user email, favorite offers and authorisation status',
    async () => {
      const fakeResponse = { email: FAKE_EMAIL };
      mockApi.onGet(ApiRoute.Login).reply(StatusCode.Success, fakeResponse );
      mockApi.onGet(ApiRoute.Favorites).reply(StatusCode.Success, mockServerOffers);
      await store.dispatch(checkAuthorization());
      expect(store.getActions())
        .toEqual([
          setUserEmail(FAKE_EMAIL),
          setFavoriteOffers(mockClientOffers),
          requireAuthorization(AuthorisationStatus.Auth),
        ]);
    });
});

it('fakeOnUnauthorized shold be called if user if unAuthorized',
  async () => {
    mockApi.onGet(ApiRoute.Login).reply(StatusCode.UnAuthorized);
    await store.dispatch(checkAuthorization());
    expect(fakeOnUnauthorized).toHaveBeenCalled();
  }
);

it('should dispatch correct actions on user logout',
  async () => {
    mockApi.onDelete(ApiRoute.Logout).reply(StatusCode.Success);
    store.clearActions();
    await store.dispatch(logout());
    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorisationStatus.NotAuth),
      setUserEmail(''),
      setFavoriteOffers([]),
    ]);
  });

