import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthoriseStatus } from '../../store/app-user/selector';
import { AuthorisationStatus, AppRoute } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorisationStatus = useSelector(getAuthoriseStatus);
  const isAuthenticated = authorisationStatus === AuthorisationStatus.Auth;

  return isAuthenticated ? children : <Navigate to={AppRoute.SignIn}/>;
}

export default PrivateRoute;
