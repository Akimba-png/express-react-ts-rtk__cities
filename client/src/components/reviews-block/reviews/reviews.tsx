import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Comment } from './../../../types/comment';
import { getAuthoriseStatus } from '../../../store/app-user/selector';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { getSortedReviewsByDate } from './../../../util';
import { AuthorisationStatus } from '../../../const';

type ReviewsProps = {
  reviewsData: Comment[];
};

function Reviews({ reviewsData }: ReviewsProps): JSX.Element {

  const [comments, setComments] = useState<Comment[]>(reviewsData);

  const totalReviewsAmount = comments.length;
  const sortedReviewsByDate = getSortedReviewsByDate(comments);

  const authorisationStatus = useSelector(getAuthoriseStatus);
  const isAuthorized = authorisationStatus === AuthorisationStatus.Auth;

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
      {isAuthorized && <ReviewForm onFormSubmit={setComments}/>}
    </section>
  );
}

export default Reviews;
