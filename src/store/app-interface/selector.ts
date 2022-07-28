import { State } from '../root-reducer';
import { NameSpace } from '../root-reducer';

export const getActiveFilter = (state: State) => state[NameSpace.Interface].activeFilter;
export const getCurrentSortType = (state: State) => state[NameSpace.Interface].currentSortingType;
export const getCurrentActiveCard = (state: State) => state[NameSpace.Interface].currentActiveCard;
