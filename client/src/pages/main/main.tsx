import MainContent from '../main-content/main-content';
import Logo from '../../components/logo-block/logo/logo';
import Navigation from '../../components/navigation/navigation';


function Main(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <Navigation />
          </div>
        </div>
      </header>
      <MainContent />
    </div>
  );
}

export default Main;
