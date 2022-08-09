import { useInput, Validator } from '../../../hooks/useInput';
import StarInput from './../star-input/star-input';
import {
  MAX_RATING_VALUE,
  starRatingDescription,
  ValidateOption,
} from '../../../const';
import ValidatorMessage from '../../validator-message/validator-message';

const commentValidator: Validator = {
  [ValidateOption.MinLength]: 3,
  [ValidateOption.MaxLength]: 5,
};

const ratingValidator: Validator = {
  [ValidateOption.NotEmpty]: true,
};

const commentValidatorStyle = {
  position: 'absolute',
  top: '-12px',
};

function ReviewForm(): JSX.Element {
  const commentControl = useInput('', commentValidator);
  const ratingControl = useInput('', ratingValidator);

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
