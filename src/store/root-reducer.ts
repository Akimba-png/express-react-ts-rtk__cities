import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './app-data/app-data';

enum NameSpace {
  Data = 'data',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData,
});
