import { Offers } from '../types/offer';
import { createAction } from '@reduxjs/toolkit';

export enum ActionType {
  SetOffers = 'data/setOffer',
  SetActiveFilter = 'app/setActiveFilter',
  SetCurrentSortType = 'app/setCurrentSortType',
  SetActiveCardId = 'app/setActiveCardId',
}

export const setOffers = (offers: Offers) => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export const setActiveFilter = createAction<string>(ActionType.SetActiveFilter);
export const setCurrentSortType = createAction<string>(
  ActionType.SetCurrentSortType
);
export const setActiveCardId = createAction<number | null>(ActionType.SetActiveCardId);

export type AppDataActions = ReturnType<typeof setOffers>;
export type AppActions =
  | ReturnType<typeof setActiveFilter>
  | ReturnType<typeof setCurrentSortType>
  | ReturnType<typeof setActiveCardId>;
export type Action = AppDataActions | AppActions;
