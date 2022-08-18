import { NameSpace, State } from '../root-reducer';

export const getAuthoriseStatus = (state: State) => state[NameSpace.User].isAuthorized;
