import { ChangeEvent } from 'react';

type StarInputProps = {
  rating: number;
  title: string;
  onInputClick: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function StarInput({
  rating,
  title,
  onInputClick,
}: StarInputProps): JSX.Element {
  return (
    <>
      <input
        onChange={onInputClick}
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default StarInput;
