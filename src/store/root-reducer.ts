import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './app-data/app-data';
import { appInterface } from './app-interface/app-interface';

export enum NameSpace {
  Data = 'data',
  Interface = 'interface',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData,
  [NameSpace.Interface]: appInterface,
});

export type State = ReturnType<typeof rootReducer>;
