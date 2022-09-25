import { getUserEmail, getAuthoriseStatus } from './selector';
import { fakeState } from '../../test/helper/fake-store';
import { AuthorisationStatus, FAKE_EMAIL } from '../../const';

describe('App-user selector:', () => {

  it('getUserEmail should return correct value', () => {
    expect(getUserEmail(fakeState)).toBe(FAKE_EMAIL);
  });

  it('getAuthoriseStatus should return correct value', () => {
    expect(getAuthoriseStatus(fakeState)).toBe(AuthorisationStatus.Auth);
  });
});
