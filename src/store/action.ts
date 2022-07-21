import { Offers } from '../types/offer';

export enum ActionType {
  SetOffers = 'data/setOffer',
}

export const setOffers = (offers: Offers) => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export type AppDataActions = ReturnType<typeof setOffers>;
export type Action = AppDataActions;
