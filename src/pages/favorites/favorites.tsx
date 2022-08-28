import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/thunk';
import { loadFavoriteOffers } from '../../store/assync-action';
import { getFavoriteOffers } from '../../store/app-data/selector';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import FavoriteList from '../../components/cards/favorite-list/favorite-list';
import FavoriteEmpty from '../favorite-empty/favorite-empty';
import { EMPTY_LIST } from './../../const';


function Favorites(): JSX.Element {

  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    dispatch(loadFavoriteOffers());
  }, [dispatch]);

  const favoritesOffers = useSelector(getFavoriteOffers);

  if (!favoritesOffers) {
    return <h1>Loading</h1>;
  }

  if (favoritesOffers.length === EMPTY_LIST) {
    return <FavoriteEmpty />;
  }

  return (
    <div className="page">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
