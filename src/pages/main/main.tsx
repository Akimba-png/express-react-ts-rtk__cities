import Filter from '../../components/filter/filter';
import Sorting from '../../components/sorting/sorting';
import MainCardsContainer from '../../components/cards/main-cards-container/main-cards-container';
import MainPageMap from '../../components/maps/main-page-map/main-page-map';
import MainPageTitle from '../../components/main-page-title/main-page-title';
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
