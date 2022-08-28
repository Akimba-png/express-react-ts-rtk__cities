import { NameSpace, State } from '../root-reducer';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getFavoriteOffers = (state: State) => state[NameSpace.Data].favoriteOffers;
export const checkDataLoaded = (state: State) => state[NameSpace.Data].isDataLoaded;
export const checkFavoriteStatus = (id: number) =>
  (state: State) =>
    state[NameSpace.Data].favoriteOffers.some((offer) => offer.id === id);
