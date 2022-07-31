import { Offer, OfferServer } from './types/offer';
import { OFFERS_NEARBY_RANGE } from './const';

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

export const checkPluralPostfix = (value: number, text: string) =>
  value > 1 ? `${text}s` : text;

export const getOfferById = (
  offerId: string,
  offers: Offer[]
): Offer | undefined =>
  offers.filter((offer) => Number(offerId) === offer.id)[0];


export const getOffersNearby = (offers: Offer[], currentOffer: Offer) => {
  const currentOfferCoordinateSum =
    currentOffer.location.latitude + currentOffer.location.longitude;
  return offers
    .sort((offerA, offerB) => {
      const offerACoordinateSum =
        offerA.location.latitude + offerA.location.longitude;
      const offerBCoordinateSum =
        offerB.location.latitude + offerB.location.longitude;
      return (
        Math.abs(offerACoordinateSum - currentOfferCoordinateSum) -
        Math.abs(offerBCoordinateSum - currentOfferCoordinateSum)
      );
    })
    .slice(...OFFERS_NEARBY_RANGE);
};
