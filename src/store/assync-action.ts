import { ThunkCreatorResult } from '../types/thunk';
import { Offers, OfferServer } from './../types/offer';
import { User } from './../types/user';
import { AuthorisationData } from '../types/authorisation';
import { requireAuthorization, setUserEmail } from './app-user/app-user';
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
    .then((response) => {
      setToken(response.data.token);
      dispatch(setUserEmail(response.data.email));
    })
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.Auth)))
    .then(() => dispatch(redirectToPage(AppRoute.Main)));
};

export const checkAuthorization = (): ThunkCreatorResult => (dispatch, _getState, api) => {
  api.get<User>(ApiRoute.Login)
    .then((response) => {
      dispatch(requireAuthorization(AuthorisationStatus.Auth));
      dispatch(setUserEmail(response.data.email));
    })
    .catch(() => null);
};

export const logout = (): ThunkCreatorResult => (dispatch, _getState, api) => {
  api.delete(ApiRoute.Logout)
    .then(() => {
      dispatch(requireAuthorization(AuthorisationStatus.NotAuth));
      dispatch(setUserEmail(''));
    });
};
