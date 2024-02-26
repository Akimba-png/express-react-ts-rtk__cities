import { setActiveCardId, setActiveFilter, setCurrentSortType } from '../action';
import { appInterface } from './app-interface';

const FILTER_VALUE = 'Paris';
const SORTING_VALUE = 'Popular';
const CARD_ID = 1;

const initialState = {
  activeFilter: '',
  currentSortingType: '',
  currentActiveCard: null,
};

describe('Reducer: app-interface', () => {
  it('should return initial value on unknown action type', () => {
    expect(appInterface(initialState, {type: 'unknown'})).toEqual(initialState);
  });

  it('should update activeFilter on filter change with given value', () => {
    const expectedState = {
      activeFilter: FILTER_VALUE,
      currentSortingType: '',
      currentActiveCard: null,
    };
    expect(appInterface(initialState, setActiveFilter(FILTER_VALUE))).toEqual(expectedState);
  });

  it('should update currentSortType on sorting change with given value', () => {
    const expectedState = {
      activeFilter: '',
      currentSortingType: SORTING_VALUE,
      currentActiveCard: null,
    };
    expect(appInterface(initialState, setCurrentSortType(SORTING_VALUE))).toEqual(expectedState);
  });

  it('should update currentActiveCard on active card change with given value', () => {
    const expectedState = {
      activeFilter: '',
      currentSortingType: '',
      currentActiveCard: CARD_ID,
    };
    expect(appInterface(initialState, setActiveCardId(CARD_ID))).toEqual(expectedState);
  });
});
