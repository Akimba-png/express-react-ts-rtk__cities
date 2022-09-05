import {
  ActionType,
  setOffers,
  setDataLoaded,
  setFavoriteOffers,
  setActiveFilter,
  setCurrentSortType,
  setActiveCardId,
  redirectToPage,
} from './action';
import { requireAuthorization, requireLogout, setUserEmail } from './app-user/app-user';
import { offers } from '../mock';
import { AppRoute, AuthorisationStatus, DEFAULT_CITY, SortingOptions } from '../const';

describe('Actions', () => {
  it('action creator for setOffers should return correct action', () => {
    const expectedAction = {
      type: ActionType.SetOffers,
      payload: offers,
    };
    expect(setOffers(offers)).toEqual(expectedAction);
  });

  it('action creator setDataLoaded should return correct action', () => {
    const expectedAction = {
      type: ActionType.SetDataLoaded,
    };
    expect(setDataLoaded()).toEqual(expectedAction);
  });

  it('action creator for setFavoriteOffers shoult return correct action', () => {
    const expectedAction = {
      type: ActionType.SetFavoriteOffers,
      payload: offers,
    };
    expect(setFavoriteOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for setActiveFilter should return correct action', () => {
    const expectedAction = {
      type: ActionType.SetActiveFilter,
      payload: DEFAULT_CITY,
    };
    expect(setActiveFilter(DEFAULT_CITY)).toEqual(expectedAction);
  });

  it('action creator for setCurrentSortType should return correct action', () => {
    const expectedAction = {
      type: ActionType.SetCurrentSortType,
      payload: SortingOptions.Popular,
    };
    expect(setCurrentSortType(SortingOptions.Popular)).toEqual(expectedAction);
  });

  it('action creator for setActiveCardId should return correct action', () => {
    const expectedAction = {
      type: ActionType.SetActiveCardId,
      payload: null,
    };
    expect(setActiveCardId(null)).toEqual(expectedAction);
  });

  it('action creator for redirectToPage should return correct action', () => {
    const expectedAction = {
      type: ActionType.RedirectToPage,
      payload: AppRoute.Main,
    };
    expect(redirectToPage(AppRoute.Main)).toEqual(expectedAction);
  });

  it('action creator for requireAuthorization should return correct action', () => {
    const ACTION_TYPE = 'appUser/requireAuthorization';
    const expectedAction = {
      type: ACTION_TYPE,
      payload: AuthorisationStatus.Auth,
    };
    expect(requireAuthorization(AuthorisationStatus.Auth)).toEqual(expectedAction);
  });

  it ('action creator for requireLogout should return correct action', () => {
    const ACTION_TYPE = 'appUser/requireLogout';
    const expectedAction = {
      type: ACTION_TYPE,
    };
    expect(requireLogout()).toEqual(expectedAction);
  });

  it('action creator for setUserEmail should return correct action', () => {
    const ACTION_TYPE = 'appUser/setUserEmail';
    const TEST_EMAIL = 'test@test.com';
    const expectedAction = {
      type: ACTION_TYPE,
      payload: TEST_EMAIL,
    };
    expect(setUserEmail(TEST_EMAIL)).toEqual(expectedAction);
  });
});
