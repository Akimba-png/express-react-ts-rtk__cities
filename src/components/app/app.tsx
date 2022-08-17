import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from './../../store/history';
import { checkDataLoaded } from '../../store/app-data/selector';
import Main from '../../pages/main/main';
import SignIn from './../../pages/sign-in/sign-in';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';


function App(): JSX.Element {
  const isDataLoaded = useSelector(checkDataLoaded);

  if (!isDataLoaded) {
    return <h1>Loading</h1>;
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
