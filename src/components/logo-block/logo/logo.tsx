import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';


export type LogoStyle = {
  linkClassName: string,
  imgClassName: string,
  imageSize: {
    width: number,
    height: number,
  }
}

type LogoProps = {
  logoStyle?: LogoStyle,
}

const defaultStyle: LogoStyle = {
  linkClassName: 'header__logo-link',
  imgClassName: 'header__logo',
  imageSize: {
    width: 81,
    height: 41,
  },
} as const;


function Logo({logoStyle = defaultStyle}: LogoProps): JSX.Element {
  const isPageMain = useLocation().pathname === AppRoute.Main;
  const linkStyle = [logoStyle.linkClassName];

  if (isPageMain) {
    linkStyle.push('header__logo-link--active');
  }

  return (
    <Link
      className={linkStyle.join(' ')}
      to={AppRoute.Main}
    >
      <img
        className={logoStyle.imgClassName}
        src="img/logo.svg"
        alt="6 cities logo"
        {...logoStyle.imageSize}
      />
    </Link>
  );
}

export default Logo;
