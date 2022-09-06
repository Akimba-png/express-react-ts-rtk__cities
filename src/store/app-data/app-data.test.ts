import { Offers } from '../../types/offer';
import { appData } from './app-data';
import { setDataLoaded, setFavoriteOffers, setOffers } from '../action';
import { offers } from '../../mock';

const initialState = {
  offers: [] as Offers,
  favoriteOffers: [] as Offers,
  isDataLoaded: false,
};

describe('Reducer: app-data', () => {
  it('should update offers on offers loaded', () => {
    const expectedState = {
      offers: offers,
      favoriteOffers: [],
      isDataLoaded: false,
    };
    expect(appData(initialState, setOffers(offers))).toEqual(expectedState);
  });

  it('should update isDataLoaded on loaded status changed', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      isDataLoaded: true,
    };
    expect(appData(initialState, setDataLoaded())).toEqual(expectedState);
  });

  it('should update favoriteOffers on favoriteOffers loaded', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: offers,
      isDataLoaded: false,
    };
    expect(appData(initialState, setFavoriteOffers(offers))).toEqual(
      expectedState
    );
  });
});

export {};
