import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../types/thunk';
import { getFavoriteOffers } from '../../../store/app-data/selector';
import { setActiveFilter, redirectToPage } from '../../../store/action';
import FavoritesCard from '../favorites-card/favorites-card';
import { getOffersByCity } from './../../../util';
import { AppRoute, CITIES } from './../../../const';
import { Offer } from '../../../types/offer';


function FavoriteList(): JSX.Element {

  const dispatch = useDispatch() as AppDispatch;
  const offers = useSelector(getFavoriteOffers);
  const offersByCity = getOffersByCity(offers);
  const favoriteCities = Object.keys(offersByCity);
  const sortedFavoriteCities = CITIES.filter((city) => favoriteCities.includes(city));

  const handleCityClick = (city: string) => (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(setActiveFilter(city));
    dispatch(redirectToPage(AppRoute.Main));
  };

  return (
    <ul className="favorites__list">
      {sortedFavoriteCities.map((city, i) => {
        const keyValue = city + i;
        return (
          <li className="favorites__locations-items" key={keyValue} data-testid='favorite-list-item' >
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a
                  onClick={handleCityClick(city)}
                  className="locations__item-link" href="/#"
                >
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offersByCity[city].map((hotelData: Offer) => (
                <FavoritesCard hotelData={hotelData} key={hotelData.id} />
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FavoriteList;
