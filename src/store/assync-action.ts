import { Offers } from './../types/offer';
import { setOffers } from './action';
import { ApiRoute } from './../const';
import { ThunkCreatorResult } from '../types/thunk';


export const loadOffers =
  (): ThunkCreatorResult => (dispatch, _getState, api) => {
    api
      .get<Offers>(ApiRoute.Offers)
      .then((response) => dispatch(setOffers(response.data)));
  };
