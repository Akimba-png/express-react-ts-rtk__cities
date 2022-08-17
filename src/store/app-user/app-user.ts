import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorisationStatus } from './../../const';

const initialState = {
  isAuthorized: AuthorisationStatus.Unknow,
};

const slice = createSlice({
  name: 'appUser',
  initialState,
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthorisationStatus>) {
      state.isAuthorized = action.payload;
    },
    requireLogout(state) {
      state.isAuthorized = AuthorisationStatus.NotAuth;
    }
  },
});

const appUser = slice.reducer;
const { requireAuthorization, requireLogout } = slice.actions;
export {requireAuthorization, requireLogout, appUser};
