import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthoriseStatus } from './../../store/app-user/selector';
import { AppRoute, AuthorisationStatus } from '../../const';

function Navigation(): JSX.Element {
  const authStatus = useSelector(getAuthoriseStatus);
  const isAuthorized = authStatus === AuthorisationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorized && (
          <>
            <li className="header__nav-item user">
              <a
                className="header__nav-link header__nav-link--profile"
                href="#"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        )}
        {!isAuthorized && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.SignIn}>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
