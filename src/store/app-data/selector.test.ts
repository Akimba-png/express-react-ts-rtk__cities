import { NameSpace } from '../root-reducer';
import {getOffers, getFavoriteOffers, checkDataLoaded, checkFavoriteStatus} from './selector';
import { fakeState } from './../../test/helper/fake-store';
import { FAKE_ID } from './../../const';

describe('App-data selector:', () => {

  it('getOffers should return correct value', () => {
    expect(getOffers(fakeState)).toEqual(fakeState[NameSpace.Data].offers);
  });

  it('getFavoriteOffers should return correct value', () => {
    expect(getFavoriteOffers(fakeState)).toEqual(fakeState[NameSpace.Data].favoriteOffers);
  });

  it('checkDataLoaded should return correct value', () => {
    expect(checkDataLoaded(fakeState)).toBe(fakeState[NameSpace.Data].isDataLoaded);
  });

  it('checkFavoriteStatus should return correct value', () => {
    expect(checkFavoriteStatus(FAKE_ID)(fakeState)).toBe(true);
  });
});
