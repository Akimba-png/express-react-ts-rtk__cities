import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './app-data/app-data';
import { appInterface } from './app-interface/app-interface';
import { appUser } from './app-user/app-user';

export enum NameSpace {
  Data = 'data',
  Interface = 'interface',
  User = 'user',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData,
  [NameSpace.Interface]: appInterface,
  [NameSpace.User]: appUser,
});

export type State = ReturnType<typeof rootReducer>;
