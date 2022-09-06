import { AuthorisationStatus } from '../../const';
import { appUser, requireAuthorization, requireLogout, setUserEmail } from './app-user';

const EMAIL_VALUE = 'test@test.com';

const initialState = {
  isAuthorized: AuthorisationStatus.Unknow,
  userEmail: '',
};

describe('Reducer: appUser', () => {
  it('should return initial state on unknown action type', () => {
    expect(appUser(initialState, { type: 'unknown' })).toEqual(initialState);
  });

  it('should update isAuthorized on autorisation status change with given value', () => {
    const expectedState = {
      isAuthorized: AuthorisationStatus.Auth,
      userEmail: '',
    };
    expect(appUser(initialState, requireAuthorization(AuthorisationStatus.Auth))).toEqual(expectedState);
  });

  it('should set isAuthorized to \'notAuth\' on logout', () => {
    const expectedState = {
      isAuthorized: AuthorisationStatus.NotAuth,
      userEmail: '',
    };
    expect(appUser(initialState, requireLogout())).toEqual(expectedState);
  });

  it('should set userEmail on userEmail changed with given value', () => {
    const expectedState = {
      isAuthorized: AuthorisationStatus.Unknow,
      userEmail: EMAIL_VALUE,
    };
    expect(appUser(initialState, setUserEmail(EMAIL_VALUE))).toEqual(expectedState);
  });
});
