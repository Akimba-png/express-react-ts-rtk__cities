import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { createApi } from './services/api';
import { loadOffers, checkAuthorization } from './store/assync-action';
import { redirect } from './store/middlewares/redirect';
import { requireAuthorization } from './store/app-user/app-user';
import { AuthorisationStatus } from './const';


export const api = createApi(() => {
  store.dispatch(requireAuthorization(AuthorisationStatus.NotAuth));
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

store.dispatch(loadOffers());
store.dispatch(checkAuthorization());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
