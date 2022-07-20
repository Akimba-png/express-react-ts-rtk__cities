import { AxiosInstance } from 'axios';
import { AppDispatch, AppGetState } from './../index';
import { setOffers } from './action';
import { ApiRoute } from './../const';

export const loadOffers =
  () => (dispatch: AppDispatch, _getState: AppGetState, api: AxiosInstance) => {
    api
      .get(ApiRoute.Offers)
      .then((response) => dispatch(setOffers(response.data)));
  };
