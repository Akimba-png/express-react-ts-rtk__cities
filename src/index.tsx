import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import { loadOffers, checkAuthorization } from './store/assync-action';
import 'react-toastify/dist/ReactToastify.css';


store.dispatch(loadOffers());
store.dispatch(checkAuthorization());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
