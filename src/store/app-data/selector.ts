import { NameSpace, State } from '../root-reducer';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getFavoriteOffers = (state: State) => state[NameSpace.Data].favoriteOffers;
export const checkDataLoaded = (state: State) => state[NameSpace.Data].isDataLoaded;
