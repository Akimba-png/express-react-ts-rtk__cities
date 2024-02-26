import { ActionType, AppDataActions } from './../../store/action';
import { Offers } from './../../types/offer';

const initialState = {
  offers: [] as Offers,
  favoriteOffers: [] as Offers,
  isDataLoaded: false,
};

export const appData = (state = initialState, action: AppDataActions) => {
  switch (action.type) {
    case ActionType.SetOffers: {
      return { ...state, offers: action.payload };
    }
    case ActionType.SetDataLoaded: {
      return { ...state, isDataLoaded: true };
    }
    case ActionType.SetFavoriteOffers: {
      return { ...state, favoriteOffers: action.payload };
    }
    default:
      return state;
  }
};
