import { Offers } from '../types/offer';
import { createAction } from '@reduxjs/toolkit';

export enum ActionType {
  SetOffers = 'data/setOffer',
  SetActiveFilter = 'app/setActiveFilter',
  SetCurrentSortType = 'app/setCurrentSortType',
}

export const setOffers = (offers: Offers) => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export const setActiveFilter = createAction<string>(ActionType.SetActiveFilter);
export const setCurrentSortType = createAction<string>(
  ActionType.SetCurrentSortType
);

export type AppDataActions = ReturnType<typeof setOffers>;
export type AppActions =
  | ReturnType<typeof setActiveFilter>
  | ReturnType<typeof setCurrentSortType>;
export type Action = AppDataActions | AppActions;
