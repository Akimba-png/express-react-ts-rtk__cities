import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../root-reducer';
import { redirect } from './redirect';
import { Action, redirectToPage, setDataLoaded } from '../action';
import { AppRoute } from '../../const';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('./../../store/history', () => ({
  history: fakeHistory,
}));

const middlewares = [redirect];
const mockStore = configureMockStore<State, Action>(middlewares);
const store = mockStore();

describe('Middleware redirect:', () => {
  beforeEach(() => fakeHistory.push(''));

  it('should change history path at \'/\'', () => {
    store.dispatch(redirectToPage(AppRoute.Main));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Main);
  });

  it('should not change history path at wrong action type', () => {
    store.dispatch(setDataLoaded());
    expect(store.getActions()).toEqual([setDataLoaded()]);
    expect(fakeHistory.location.pathname).toBe('');
  });
});
