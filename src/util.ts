import { Hotel } from './types/hotel';

export const adaptHotelToClient = (hotel: Hotel) => {
  const adaptedHotel = Object.assign({}, hotel, {
    previewImage: hotel.preview_image,
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    maxAdults: hotel.max_adults,
    host: Object.assign(
      {},
      hotel.host,
      {
        isPro: hotel.host.is_pro,
        avatarUrl: hotel.host.avatar_url,
      }),
  });

  delete adaptedHotel.preview_image;
  delete adaptedHotel.is_favorite;
  delete adaptedHotel.is_premium;
  delete adaptedHotel.max_adults;
  delete adaptedHotel.host.is_pro;
  delete adaptedHotel.host.avatar_url;

  return adaptedHotel;
};
