import { getActiveFilter, getCurrentActiveCard, getCurrentSortType } from './selector';
import { fakeState } from '../../test/helper/fake-store';
import { DEFAULT_CITY, FAKE_ID, SortingOptions } from '../../const';

describe('App-interface selector:', () => {

  it('getActiveFilter should return correct value', () => {
    expect(getActiveFilter(fakeState)).toBe(DEFAULT_CITY);
  });

  it('getCurrenctActiveCard should return correct value', () => {
    expect(getCurrentActiveCard(fakeState)).toBe(FAKE_ID);
  });

  it('getCurrentSortType should return correct value', () => {
    expect(getCurrentSortType(fakeState)).toBe(SortingOptions.Popular);
  });
});
