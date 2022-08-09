import { useParams } from 'react-router-dom';
import { useAssync } from './../../hooks/use-assync';
import RoomImage from '../../components/room-image/room-image';
import RoomCardsContainer from '../../components/cards/room-cards-container/room-cards-container';
import RoomPageMap from '../../components/maps/room-page-map/room-page-map';
import Reviews from '../../components/reviews-block/reviews/reviews';
import { checkPluralPostfix } from '../../util';
import { StarRating } from '../../const';


type Param = {
  offerId: string;
};

function Room(): JSX.Element {

  const { offerId } = useParams() as Param;
  const roomData = useAssync(offerId);

  if (!roomData.length) {
    return <h1>Loading</h1>;
  }
  const [currentOffer, nearbyOffers, comments] = roomData;
  const nearbyOffersWithCurrent = [currentOffer, ...nearbyOffers];

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
  } = currentOffer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => {
                const keyValue = `${image}-${i}`;
                return <RoomImage imageSrc={image} key={keyValue} />;
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{ width: StarRating[Math.round(rating)] }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${checkPluralPostfix(bedrooms, 'Bedroom')}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${checkPluralPostfix(maxAdults, 'adult')}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((e, i) => {
                    const keyValue = `${e}-${i}`;
                    return (
                      <li className="property__inside-item" key={keyValue}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
            </div>
            <Reviews reviewsData={comments}/>
            <RoomPageMap filteredOffers={nearbyOffersWithCurrent} currentActiveCardId={+offerId}/>
          </div>
        </section>
        <div className="container">
          <RoomCardsContainer offers={nearbyOffers} />
        </div>
      </main>
    </div>
  );
}

export default Room;
