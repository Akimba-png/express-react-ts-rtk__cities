import Filter from '../../components/filter/filter';
import Sorting from '../../components/sorting/sorting';
import MainCardsContainer from '../../components/cards/main-cards-container/main-cards-container';
import MainPageMap from '../../components/maps/main-page-map/main-page-map';
import MainPageTitle from '../../components/main-page-title/main-page-title';
import Navigation from '../../components/navigation/navigation';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Filter />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <MainPageTitle />
              <Sorting />
              <MainCardsContainer />
            </section>
            <div className="cities__right-section">
              <MainPageMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
