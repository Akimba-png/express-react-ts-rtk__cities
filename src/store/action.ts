import { Offers } from '../types/offer';
import { createAction } from '@reduxjs/toolkit';

export enum ActionType {
  SetOffers = 'data/setOffer',
  SetActiveFilter = 'app/setActiveFilter',
}

export const setOffers = (offers: Offers) => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export const setActiveFilter = createAction<string>(ActionType.SetActiveFilter);

export type AppDataActions = ReturnType<typeof setOffers>;
export type AppActions = ReturnType<typeof setActiveFilter>;
export type Action = AppDataActions | AppActions;
