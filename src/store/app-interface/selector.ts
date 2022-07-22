import { NameSpace } from '../root-reducer';
import { State } from '../root-reducer';

export const getActiveFilter = (state: State) => state[NameSpace.Interface].activeFilter;
