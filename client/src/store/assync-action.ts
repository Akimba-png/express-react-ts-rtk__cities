import { ThunkCreatorResult } from '../types/thunk';
import { Offers, OfferServer } from './../types/offer';
import { User } from './../types/user';
import { AuthorisationData } from '../types/authorisation';
import { requireAuthorization, setUserEmail } from './app-user/app-user';
import { redirectToPage, setDataLoaded, setFavoriteOffers, setOffers } from './action';
import { setToken } from '../services/token';
import { adaptOfferToClient, notify } from '../util';
import { ApiRoute, AppRoute, AuthorisationStatus } from './../const';
import { NameSpace } from './root-reducer';


export const loadOffers =
  (): ThunkCreatorResult => (dispatch, _getState, api) =>
    api
      .get<OfferServer[]>(ApiRoute.Offers)
      .then((response) => response.data.map((offer: OfferServer) => adaptOfferToClient(offer)))
      .then((offers: Offers) => dispatch(setOffers(offers)))
      .then(() => dispatch(setDataLoaded()))
      .catch(notify);


export const loadFavoriteOffers =
  (): ThunkCreatorResult => (dispatch, _getState, api) =>
    api
      .get<OfferServer[]>(ApiRoute.Favorites)
      .then((response) => response.data.map((offer: OfferServer) => adaptOfferToClient(offer)))
      .then((data) => dispatch(setFavoriteOffers(data)))
      .catch(notify);

export const switchFavoriteStatus = (
  offerId: number,
  status: number,
  onError: () => void,
): ThunkCreatorResult => (dispatch, getState, api) =>
  api
    .post(`${ApiRoute.Favorites}${offerId}/${status}`)
    .then((response) => adaptOfferToClient(response.data))
    .then((updatedOffer) => {
      const favoriteOffers = getState()[NameSpace.Data].favoriteOffers;
      if (updatedOffer.isFavorite) {
        dispatch(setFavoriteOffers([...favoriteOffers, updatedOffer]));
        return;
      }
      dispatch(setFavoriteOffers(
        favoriteOffers.filter((offer) => offer.id !== updatedOffer.id)
      ));
    })
    .catch(() => {
      onError();
      notify();
    });

export const authorise = (authorisationData: AuthorisationData): ThunkCreatorResult => (dispatch, _getState, api) =>
  api.post(ApiRoute.Login, authorisationData)
    .then((response) => {
      setToken(response.data.token);
      dispatch(setUserEmail(response.data.email));
      dispatch(requireAuthorization(AuthorisationStatus.Auth));
    })
    .then(() => dispatch(loadFavoriteOffers()))
    .then(() => dispatch(redirectToPage(AppRoute.Main)))
    .catch(notify);

export const checkAuthorization = (): ThunkCreatorResult => (dispatch, _getState, api) =>
  api.get<User>(ApiRoute.Login)
    .then((response) => {
      dispatch(setUserEmail(response.data.email));
    })
    .then(() => dispatch(loadFavoriteOffers()))
    .then(() => dispatch(requireAuthorization(AuthorisationStatus.Auth)))
    .catch(() => null);


export const logout = (): ThunkCreatorResult => (dispatch, _getState, api) =>
  api.delete(ApiRoute.Logout)
    .then(() => {
      dispatch(requireAuthorization(AuthorisationStatus.NotAuth));
      dispatch(setUserEmail(''));
      dispatch(setFavoriteOffers([]));
    })
    .catch(notify);
