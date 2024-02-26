import Logo from '../logo/logo';
import { LogoStyle } from '../logo/logo';

const footerStyle: LogoStyle = {
  linkClassName: 'footer__logo-link',
  imgClassName: 'footer__logo',
  imageSize: {
    width: 64,
    height: 33,
  },
} as const;

function FooterLogo(): JSX.Element {
  return (
    <Logo logoStyle={footerStyle} />
  );
}

export default FooterLogo;
