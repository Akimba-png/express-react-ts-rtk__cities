import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/thunk';
import { checkFavoriteStatus } from '../../store/app-data/selector';
import { getAuthoriseStatus } from './../../store/app-user/selector';
import { switchFavoriteStatus } from '../../store/assync-action';
import { redirectToPage } from '../../store/action';
import { AppRoute, AuthorisationStatus } from '../../const';
import './bookmark-button.css';

const ERROR_SHOWTIME = 1000;

enum BookmarkButtonType {
  Default = 'place-card',
  Property = 'property',
}

const BookmarkIconSize = {
  Default: {
    width: '18',
    height: '19',
  },
  Property: {
    width: '31',
    height: '33',
  },
} as const;

type BookmarkButtonProps = {
  id: number;
  isPropertyButton?: boolean,
}


function BookmarkButton({id, isPropertyButton}: BookmarkButtonProps): JSX.Element {

  const dispatch = useDispatch() as AppDispatch;
  const isFavorite = useSelector(checkFavoriteStatus(id));
  const isAuthorized = useSelector(getAuthoriseStatus);
  const [submitErrorStatus, changeErrorSubmitStatus] = useState<boolean>(false);

  const buttonStyle = isPropertyButton ? BookmarkButtonType.Property : BookmarkButtonType.Default;
  const iconSize = isPropertyButton ? BookmarkIconSize.Property : BookmarkIconSize.Default;

  const handleSubmitError = () => {
    changeErrorSubmitStatus(true);
    setTimeout(() => {
      changeErrorSubmitStatus(false);
    }, ERROR_SHOWTIME);
  };

  const handleBookmarkClick = () => {
    if (isAuthorized !== AuthorisationStatus.Auth) {
      dispatch(redirectToPage(AppRoute.SignIn));
      return;
    }
    const statusToUpdate = Number(!isFavorite);
    dispatch(switchFavoriteStatus(id, statusToUpdate, handleSubmitError));
  };

  return (
    <button
      onClick={handleBookmarkClick}
      className={`
        ${buttonStyle}__bookmark-button button
        ${isFavorite ? `${buttonStyle}__bookmark-button--active` : ''}
        ${submitErrorStatus ? `${buttonStyle}__bookmark-button--error` : ''}
    `}
      type="button"
    >
      <svg className={`${buttonStyle}__bookmark-icon`} {...iconSize}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
