import { Comment } from './../../../types/comment';
import { getDateTime, getFormattedDate } from './../../../util';
import { StarRating } from './../../../const';

type ReviewItemProps = {
  reviewItemData: Comment;
};

function ReviewsItem({ reviewItemData }: ReviewItemProps): JSX.Element {
  const { rating, comment, date } = reviewItemData;
  const { name, avatarUrl } = reviewItemData.user;
  const reviewDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${StarRating[rating]}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getDateTime(reviewDate)}>
          {getFormattedDate(reviewDate)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
