import {createReducer} from '@reduxjs/toolkit';
import {setActiveFilter} from './../action';
import { DEFAULT_CITY } from '../../const';

const initialState = {
  activeFilter: DEFAULT_CITY,
};

export const appInterface = createReducer(initialState, (builder) => {
  builder.addCase(setActiveFilter, (state, action) => {
    state.activeFilter = action.payload;
  });
});
