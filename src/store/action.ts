import { Offers } from '../types/offer';
import { createAction } from '@reduxjs/toolkit';
import { requireAuthorization, requireLogout, setUserEmail } from './app-user/app-user';
import { AppRoute } from '../const';

export enum ActionType {
  SetOffers = 'data/setOffer',
  SetDataLoaded = 'data/setDataLoaded',
  SetFavoriteOffers = 'data/setFavoriteOffers',
  SetActiveFilter = 'app/setActiveFilter',
  SetCurrentSortType = 'app/setCurrentSortType',
  SetActiveCardId = 'app/setActiveCardId',
  RedirectToPage = 'app/redirectToPage',
}

export const setOffers = (
  offers: Offers
): { type: ActionType.SetOffers; payload: Offers } => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export const setDataLoaded = (): { type: ActionType.SetDataLoaded } => ({
  type: ActionType.SetDataLoaded,
});

export const setFavoriteOffers = createAction<Offers>(ActionType.SetFavoriteOffers);

export const setActiveFilter = createAction<string>(ActionType.SetActiveFilter);
export const setCurrentSortType = createAction<string>(
  ActionType.SetCurrentSortType
);
export const setActiveCardId = createAction<number | null>(
  ActionType.SetActiveCardId
);

export const redirectToPage = createAction<AppRoute>(ActionType.RedirectToPage);

export type AppDataActions =
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setDataLoaded>
  | ReturnType<typeof setFavoriteOffers>;

export type AppActions =
  | ReturnType<typeof setActiveFilter>
  | ReturnType<typeof setCurrentSortType>
  | ReturnType<typeof setActiveCardId>
  | ReturnType<typeof redirectToPage>;

export type AppUserAction =
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setUserEmail>;

export type Action = AppDataActions | AppActions | AppUserAction;
