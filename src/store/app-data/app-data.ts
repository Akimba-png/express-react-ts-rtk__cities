import { ActionType, AppDataActions } from './../../store/action';
import { Offers } from './../../types/offer';

const initialState = {
  offers: [] as Offers,
};

export const appData = (state = initialState, action: AppDataActions) => {
  switch (action.type) {
    case ActionType.SetOffers: {
      return { ...state, offers: action.payload };
    }
    default:
      return state;
  }
};
