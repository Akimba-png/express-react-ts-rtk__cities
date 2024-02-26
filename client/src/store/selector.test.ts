import { fakeState } from '../test/helper/fake-store';
import { NameSpace } from './root-reducer';
import { getFilteredOffers, getSortedOffers } from './selector';

describe('Root selector:', () => {

  it('getFilteredOffers should return correct value', () => {
    expect(getFilteredOffers(fakeState)).toEqual(fakeState[NameSpace.Data].offers);
  });

  it('getSortedOffers should return correct value', () => {
    expect(getSortedOffers(fakeState)).toEqual(fakeState[NameSpace.Data].offers);
  });
});
