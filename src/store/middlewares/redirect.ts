import { Middleware } from '@reduxjs/toolkit';
import { history } from '../history';
import { State } from '../root-reducer';
import { AppDispatch } from '../../types/thunk';
import { requireLogout } from '../app-user/app-user';
import { AppRoute } from '../../const';

export const redirect: Middleware<Record<string, never>, State, AppDispatch> =
  (_store) => (next) => (action) => {
    if (action.type === requireLogout.type) {
      history.push(AppRoute.Main);
      return;
    }
    next(action);
  };
