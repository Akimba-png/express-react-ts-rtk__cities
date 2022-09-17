import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { redirect } from './middlewares/redirect';
import { createApi } from '../services/api';
import { requireAuthorization } from './app-user/app-user';
import { setFavoriteOffers } from './action';
import { AuthorisationStatus } from '../const';


export const api = createApi(() => {
  store.dispatch(requireAuthorization(AuthorisationStatus.NotAuth));
  store.dispatch(setFavoriteOffers([]));
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
