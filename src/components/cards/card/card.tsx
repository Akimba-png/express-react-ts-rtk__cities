import { Offer } from '../../../types/offer';

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
  const {title} = hotelData;
  return (
    <article className={`${Article} place-card`}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${Wrapper} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            width={ImageWidth}
            height={ImageHeight}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${CardInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default Card;
