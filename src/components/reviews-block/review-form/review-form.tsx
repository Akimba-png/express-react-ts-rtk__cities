import { useState, useEffect, ChangeEvent } from 'react';
import StarInput from './../star-input/star-input';
import { MAX_RATING_VALUE, starRatingDescription, CommentLength } from '../../../const';

function ReviewForm(): JSX.Element {
  const [starRating, setStarRating] = useState<string | null>(null);
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [validateStatus, setValidateStatus] = useState<boolean>(false);

  useEffect(() => {
    if (starRating && textAreaValue.length >= CommentLength.Min && textAreaValue.length <= CommentLength.Max) {
      setValidateStatus(true);
    } else {
      setValidateStatus(false);
    }
  }, [starRating, textAreaValue]);

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) =>
    setTextAreaValue(evt.target.value);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.values(starRatingDescription).map((starDescription, i) => {
          const index = MAX_RATING_VALUE - i;
          const keyValue = `${starDescription}${i}`;
          return (
            <StarInput
              rating={index}
              title={starDescription}
              key={keyValue}
              onInputClick={setStarRating}
            />
          );
        })}
      </div>
      <textarea
        onChange={handleTextareaChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!validateStatus}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
