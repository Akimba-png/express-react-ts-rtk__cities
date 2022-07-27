import { createReducer } from '@reduxjs/toolkit';
import { setActiveFilter, setCurrentSortType, setActiveCardId } from './../action';
import { DEFAULT_CITY, SortingOptions } from '../../const';

type InintialState = {
  activeFilter: string,
  currentSortingType: string,
  currentActiveCard: null | number,
}

const initialState = {
  activeFilter: DEFAULT_CITY,
  currentSortingType: SortingOptions.Popular,
  currentActiveCard: null,
} as InintialState;

export const appInterface = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveFilter, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addCase(setCurrentSortType, (state, action) => {
      state.currentSortingType = action.payload;
    })
    .addCase(setActiveCardId, (state, action) => {
      state.currentActiveCard = action.payload;
    });
});
