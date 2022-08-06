import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { Comment } from './../../../types/comment';
import { getSortedReviewsByDate } from './../../../util';

type ReviewsProps = {
  reviewsData: Comment[];
};
function Reviews({ reviewsData }: ReviewsProps): JSX.Element {
  const totalReviewsAmount = reviewsData.length;

  const sortedReviewsByDate = getSortedReviewsByDate(reviewsData);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{totalReviewsAmount}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviewsByDate.map((reviewItemData) => {
          const keyValue = reviewItemData.id + reviewItemData.date;
          return <ReviewsItem reviewItemData={reviewItemData} key={keyValue} />;
        })}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
