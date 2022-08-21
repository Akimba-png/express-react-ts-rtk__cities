import { Middleware } from '@reduxjs/toolkit';
import { history } from '../history';
import { State } from '../root-reducer';
import { AppDispatch } from '../../types/thunk';
import { ActionType } from '../action';

export const redirect: Middleware<Record<string, never>, State, AppDispatch> =
  (_store) => (next) => (action) => {
    if (action.type === ActionType.RedirectToPage) {
      history.push(action.payload);
      return;
    }
    next(action);
  };
