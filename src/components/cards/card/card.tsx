import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offer';
import { StarRating } from './../../../const';

type Style = {
  Article: string;
  Wrapper: string;
  ImageWidth: string;
  ImageHeight: string;
  CardInfo: string;
};

type CardProps = {
  cardStyle: Style;
  hotelData: Offer;
};

function Card({ cardStyle, hotelData }: CardProps): JSX.Element {

  const { Article, Wrapper, ImageWidth, ImageHeight, CardInfo } = cardStyle;
  const {
    id,
    type,
    title,
    price,
    rating,
    isPremium,
    isFavorite,
    previewImage,
  } = hotelData;

  return (
    <article className={`${Article} place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${Wrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={ImageWidth}
            height={ImageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${CardInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active button' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: StarRating[Math.round(rating)] }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
