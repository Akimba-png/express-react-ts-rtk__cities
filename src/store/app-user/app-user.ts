import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorisationStatus } from './../../const';

const initialState = {
  isAuthorized: AuthorisationStatus.Unknow,
  userEmail: '',
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
    },
    setUserEmail(state, action: PayloadAction<string>) {
      state.userEmail = action.payload;
    }
  },
});

const appUser = slice.reducer;
const { requireAuthorization, requireLogout, setUserEmail } = slice.actions;
export { requireAuthorization, requireLogout, setUserEmail, appUser };
