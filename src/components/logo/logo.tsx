import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  const isPageMain = useLocation().pathname === AppRoute.Main;
  const styles = ['header__logo-link'];

  if (isPageMain) {
    styles.push('header__logo-link--active');
  }

  return (
    <Link
      className={styles.join(' ')}
      to={AppRoute.Main}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

export default Logo;
