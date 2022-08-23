import FavoritesCard from '../favorites-card/favorites-card';
import { offers } from '../../../mock';
import { getOffersByCity } from './../../../util';
import { CITIES } from './../../../const';

function FavoriteList(): JSX.Element {

  const offersByCity = getOffersByCity(offers);
  const favoriteCities = Object.keys(offersByCity);
  const sortedFavoriteCities = CITIES.filter((city) => favoriteCities.includes(city));

  return (
    <ul className="favorites__list">
      {sortedFavoriteCities.map((city, i, a) => {
        const keyValue = city + i;
        return (
          <li className="favorites__locations-items" key={keyValue}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offersByCity[city].map((hotelData: any) => (
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
