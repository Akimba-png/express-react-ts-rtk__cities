import { createReducer } from '@reduxjs/toolkit';
import { setActiveFilter, setCurrentSortType } from './../action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../../const';

const initialState = {
  activeFilter: DEFAULT_CITY,
  currentSortingType: DEFAULT_SORTING_TYPE,
};

export const appInterface = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveFilter, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addCase(setCurrentSortType, (state, action) => {
      state.currentSortingType = action.payload;
    });
});
