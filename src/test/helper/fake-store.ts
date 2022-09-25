import thunk from 'redux-thunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '../../store/action';
import { createApi } from '../../services/api';
import { State } from '../../store/root-reducer';
import { mockClientOffers } from '../../mock';
import {
  AuthorisationStatus,
  DEFAULT_CITY,
  SortingOptions,
  FAKE_EMAIL,
  FAKE_ID,
} from '../../const';

const onAuthorizedFake = jest.fn();
const api = createApi(onAuthorizedFake);
export const mockApi = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

export const fakeState: State = {
  data: {
    offers: mockClientOffers,
    favoriteOffers: mockClientOffers,
    isDataLoaded: true,
  },
  interface: {
    activeFilter: DEFAULT_CITY,
    currentSortingType: SortingOptions.Popular,
    currentActiveCard: FAKE_ID,
  },
  user: {
    isAuthorized: AuthorisationStatus.Auth,
    userEmail: FAKE_EMAIL,
  },
};

export const fakeStore = mockStore(fakeState);
