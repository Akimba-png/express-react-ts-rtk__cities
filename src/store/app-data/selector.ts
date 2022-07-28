import { NameSpace, State } from '../root-reducer';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const checkDataLoaded = (state: State) => state[NameSpace.Data].isDataLoaded;
