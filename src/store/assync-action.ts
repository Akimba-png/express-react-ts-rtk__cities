import { Offers, OfferServer } from './../types/offer';
import { setOffers } from './action';
import { ApiRoute } from './../const';
import { ThunkCreatorResult } from '../types/thunk';
import { adaptOfferToClient } from '../util';


export const loadOffers =
  (): ThunkCreatorResult => (dispatch, _getState, api) => {
    api
      .get<OfferServer[]>(ApiRoute.Offers)
      .then((response) => response.data.map((offer: OfferServer) => adaptOfferToClient(offer)))
      .then((offers: Offers) => dispatch(setOffers(offers)));
  };
