import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/thunk';
import { logout } from './../../store/assync-action';
import { AppRoute, AuthorisationStatus } from '../../const';
import {
  getAuthoriseStatus,
  getUserEmail,
} from './../../store/app-user/selector';


function Navigation(): JSX.Element {
  const dispatch = useDispatch() as AppDispatch;
  const authStatus = useSelector(getAuthoriseStatus);
  const userEmail = useSelector(getUserEmail);

  const isAuthorized = authStatus === AuthorisationStatus.Auth;

  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };

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
                  {userEmail}
                </span>
              </a>
            </li>
            <li className="header__nav-item">
              <a
                onClick={handleLogoutClick}
                className="header__nav-link"
                href="/#"
              >
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
