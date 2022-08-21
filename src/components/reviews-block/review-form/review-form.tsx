import { useInput, Validator } from '../../../hooks/useInput';
import StarInput from './../star-input/star-input';
import {
  ApiRoute,
  CommentLength,
  MAX_RATING_VALUE,
  starRatingDescription,
  ValidateOption,
} from '../../../const';
import ValidatorMessage from '../../validator-message/validator-message';

import { api } from '../../..';
import { useParams } from 'react-router-dom';
import { MouseEvent } from 'react';

const commentValidator: Validator = {
  [ValidateOption.MinLength]: CommentLength.Min,
  [ValidateOption.MaxLength]: CommentLength.Max,
};

const ratingValidator: Validator = {
  [ValidateOption.NotEmpty]: true,
};

const commentValidatorStyle = {
  position: 'absolute',
  top: '-12px',
};

function ReviewForm(): JSX.Element {
  const offerId = useParams().offerId;
  const commentControl = useInput('', commentValidator);
  const ratingControl = useInput('', ratingValidator);

  const handleSubmitForm = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const dataToSend = JSON.stringify({
      comment: commentControl.inputValue,
      rating: ratingControl.inputValue,
    });
    api.post(`${ApiRoute.Comments}${offerId}`, dataToSend);

  };

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
              onInputClick={ratingControl.handleInputChange}
            />
          );
        })}
      </div>
      <textarea
        onBlur={commentControl.handleBlurredStatus}
        onChange={commentControl.handleInputChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentControl.inputValue}
      >
      </textarea>
      <div className="reviews__button-wrapper" style={{ position: 'relative' }}>
        {commentControl.minLengthError && commentControl.isBlurred && (
          <ValidatorMessage
            messageText={commentControl.minLengthError}
            extraStyle={commentValidatorStyle}
          />
        )}
        {commentControl.maxLengthError && commentControl.isBlurred && (
          <ValidatorMessage
            messageText={commentControl.maxLengthError}
            extraStyle={commentValidatorStyle}
          />
        )}
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          onClick={handleSubmitForm}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            !(commentControl.isControlValid && ratingControl.isControlValid)
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
