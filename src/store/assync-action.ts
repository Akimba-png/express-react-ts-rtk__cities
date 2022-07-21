import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Action } from './action';
import { State } from './root-reducer';
import { Offers } from './../types/offer';
import { setOffers } from './action';
import { ApiRoute } from './../const';

export type ThunkCreatorResult = ThunkAction<void, State, AxiosInstance, Action>

export const loadOffers =
  (): ThunkCreatorResult => (dispatch, _getState, api) => {
    api
      .get<Offers>(ApiRoute.Offers)
      .then((response) => dispatch(setOffers(response.data)));
  };
