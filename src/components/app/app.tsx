import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from './../../store/history';
import { checkDataLoaded } from '../../store/app-data/selector';
import { getAuthoriseStatus } from '../../store/app-user/selector';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import SignIn from './../../pages/sign-in/sign-in';
import Loading from '../../pages/loading/loading';
import { AppRoute, AuthorisationStatus } from '../../const';


function App(): JSX.Element {
  const isDataLoaded = useSelector(checkDataLoaded);
  const isAuthenticated = useSelector(getAuthoriseStatus) !== AuthorisationStatus.Unknow;

  if (!isDataLoaded || !isAuthenticated ) {
    return <Loading />;
  }

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
