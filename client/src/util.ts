import { Offer, OfferServer, OffersByCity } from './types/offer';
import { Comment, CommentServer } from './types/comment';
import { toast } from 'react-toastify';

import {
  SuffixEnding,
  Month,
  COMMENT_DATE_LENGTH,
  MAX_COMMENTS_COUNT,
  ErrorToastParam,
} from './const';

export const adaptOfferToClient = (offer: OfferServer): Offer => {
  const adaptedOffer = Object.assign({}, offer, {
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    type: offer.type.replace(/^\w/, (m: string) => m.toUpperCase()),
    host: Object.assign({}, offer.host, {
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url,
    }),
  });
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;
  return adaptedOffer as Offer;
};

export const adaptCommentToClient = (comment: CommentServer): Comment => {
  const adaptedComment = Object.assign({}, comment, {
    user: Object.assign({}, comment.user, {
      isPro: comment.user.is_pro,
      avatarUrl: comment.user.avatar_url,
    }),
  });
  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;
  return adaptedComment as Comment;
};

export const checkPluralPostfix = (value: number, text: string) =>
  value > 1 ? `${text}s` : text;

export const checkRuPluralPostfix = (value: number, text: string) => {
  if (value === SuffixEnding.Single) {
    return text;
  }
  if (value > SuffixEnding.Single && value < SuffixEnding.Plural) {
    return `${text}а`;
  }
  return `${text}ов`;
};

export const getFormattedDate = (date: Date): string =>
  `${Month[date.getMonth()]} ${date.getFullYear()}`;

export const getDateTime = (date: Date): string =>
  date.toISOString().slice(0, COMMENT_DATE_LENGTH);

export const getSortedReviewsByDate = (reviewsData: Comment[]): Comment[] =>
  reviewsData
    .slice()
    .sort(
      (reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date)
    )
    .slice(0, MAX_COMMENTS_COUNT);

export const getOffersByCity = (offers: Offer[]) =>
  offers.reduce((acc: OffersByCity, offer) => {
    const cityName = offer.city.name;
    if (acc[cityName]) {
      acc[cityName].push(offer);
      return acc;
    }
    acc[cityName] = [offer];
    return acc;
  }, {});


export const notify = () => {
  toast.error(ErrorToastParam.Text, {autoClose: ErrorToastParam.ShowTime as number});
};

export const parseUrl = (url: string) => {
  if (url.includes('nearby')) { return '/nearby.json'; }
  if (/hotels\/\d+/.test(url)) { return '/hotel.json'; }
  if (url.includes('hotels')) { return '/hotels.json'; }
  if (url.includes('comments')) { return '/comments.json'; }
};
