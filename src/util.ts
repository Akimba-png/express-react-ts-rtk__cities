import { Offer, OfferServer } from './types/offer';
import { Comment, CommentServer } from './types/comment';

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

