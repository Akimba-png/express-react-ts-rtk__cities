import { NameSpace, State } from '../root-reducer';

export const getAuthoriseStatus = (state: State) => state[NameSpace.User].isAuthorized;
export const getUserEmail = (state: State) => state[NameSpace.User].userEmail;
