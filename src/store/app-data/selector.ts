import { NameSpace, State } from '../root-reducer';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
