import { useSelector } from 'react-redux';
import { getFilteredOffers } from '../../store/selector';
import Filter from '../../components/filter/filter';
import MainPageTitle from '../../components/main-page-title/main-page-title';
import Sorting from '../../components/sorting/sorting';
import MainCardsContainer from '../../components/cards/main-cards-container/main-cards-container';
import MainPageMap from '../../components/maps/main-page-map/main-page-map';
import MainEmpty from '../main-empty/main-empty';
import { EMPTY_LIST } from '../../const';

const STYLE_EMPTY = 'page__main--index-empty';

function MainContent(): JSX.Element {
  const totalOffersInCity = useSelector(getFilteredOffers).length;
  const isListEmpty = totalOffersInCity === EMPTY_LIST;
  const styles = ['page__main', 'page__main--index'];

  if (isListEmpty) {
    styles.push(STYLE_EMPTY);
  }

  return (
    <main className={styles.join(' ')}>
      <h1 className="visually-hidden">Cities</h1>
      <Filter />
      <div className="cities">
        {isListEmpty ? (
          <MainEmpty />
        ) : (
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
        )}
      </div>
    </main>
  );
}

export default MainContent;
