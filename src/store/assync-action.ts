import { ThunkCreatorResult } from '../types/thunk';
import { Offers, OfferServer } from './../types/offer';
import { AuthorisationData } from '../types/authorisation';
import { requireAuthorization } from './app-user/app-user';
import { redirectToPage, setDataLoaded, setOffers } from './action';
import { setToken } from '../services/token';
import { adaptOfferToClient } from '../util';
import { ApiRoute, AppRoute, AuthorisationStatus } from './../const';


export const loadOffers =
  (): ThunkCreatorResult => (dispatch, _getState, api) => {
    api
      .get<OfferServer[]>(ApiRoute.Offers)
      .then((response) => response.data.map((offer: OfferServer) => adaptOfferToClient(offer)))
      .then((offers: Offers) => dispatch(setOffers(offers)))
      .then(() => dispatch(setDataLoaded()));
  };


export const authorise = (authorisationData: AuthorisationData): ThunkCreatorResult => (dispatch, _getState, api) => {
  api.post(ApiRoute.Login, authorisationData)
    .then((response) => setToken(response.data.token))
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.Auth)))
    .then(() => dispatch(redirectToPage(AppRoute.Main)));
};
