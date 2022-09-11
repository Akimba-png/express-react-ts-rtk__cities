import { FIRST_ELEMENT_INDEX } from './const';
import { adaptOfferToClient } from './util';

export const mockServerOffers = [{
  'city': {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  'preview_image': 'https://8.react.pages.academy/static/hotel/6.jpg',
  'images': [
    'https://8.react.pages.academy/static/hotel/8.jpg',
    'https://8.react.pages.academy/static/hotel/20.jpg',
    'https://8.react.pages.academy/static/hotel/11.jpg',
    'https://8.react.pages.academy/static/hotel/15.jpg',
    'https://8.react.pages.academy/static/hotel/10.jpg',
    'https://8.react.pages.academy/static/hotel/12.jpg',
    'https://8.react.pages.academy/static/hotel/1.jpg',
    'https://8.react.pages.academy/static/hotel/19.jpg',
    'https://8.react.pages.academy/static/hotel/14.jpg',
    'https://8.react.pages.academy/static/hotel/13.jpg',
    'https://8.react.pages.academy/static/hotel/7.jpg',
    'https://8.react.pages.academy/static/hotel/6.jpg',
    'https://8.react.pages.academy/static/hotel/18.jpg',
    'https://8.react.pages.academy/static/hotel/16.jpg'
  ],
  'title': 'Amazing and Extremely Central Flat',
  'is_favorite': true,
  'is_premium': false,
  'rating': 4.7,
  'type': 'apartment',
  'bedrooms': 1,
  'max_adults': 9,
  'price': 462,
  'goods': [
    'Laptop friendly workspace',
    'Baby seat',
    'Air conditioning',
    'Washer',
    'Breakfast'
  ],
  'host': {
    'id': 25,
    'name': 'Angelina',
    'is_pro': true,
    'avatar_url': 'img/avatar-angelina.jpg'
  },
  'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  'location': {
    'latitude': 53.534341000000005,
    'longitude': 9.998654,
    'zoom': 16
  },
  'id': 1
}];

export const mockClientOffers =
  mockServerOffers.map((offer) => adaptOfferToClient(offer));

export const mockClientOffer = mockClientOffers[FIRST_ELEMENT_INDEX];

export const mockTrueFavoriteOffer = {
  'city': {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  'preview_image': 'https://8.react.pages.academy/static/hotel/6.jpg',
  'images': [
    'https://8.react.pages.academy/static/hotel/8.jpg',
    'https://8.react.pages.academy/static/hotel/20.jpg',
    'https://8.react.pages.academy/static/hotel/11.jpg',
    'https://8.react.pages.academy/static/hotel/15.jpg',
    'https://8.react.pages.academy/static/hotel/10.jpg',
    'https://8.react.pages.academy/static/hotel/12.jpg',
    'https://8.react.pages.academy/static/hotel/1.jpg',
    'https://8.react.pages.academy/static/hotel/19.jpg',
    'https://8.react.pages.academy/static/hotel/14.jpg',
    'https://8.react.pages.academy/static/hotel/13.jpg',
    'https://8.react.pages.academy/static/hotel/7.jpg',
    'https://8.react.pages.academy/static/hotel/6.jpg',
    'https://8.react.pages.academy/static/hotel/18.jpg',
    'https://8.react.pages.academy/static/hotel/16.jpg'
  ],
  'title': 'Amazing and Extremely Central Flat',
  'is_favorite': true,
  'is_premium': false,
  'rating': 4.7,
  'type': 'apartment',
  'bedrooms': 1,
  'max_adults': 9,
  'price': 462,
  'goods': [
    'Laptop friendly workspace',
    'Baby seat',
    'Air conditioning',
    'Washer',
    'Breakfast'
  ],
  'host': {
    'id': 25,
    'name': 'Angelina',
    'is_pro': true,
    'avatar_url': 'img/avatar-angelina.jpg'
  },
  'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  'location': {
    'latitude': 53.534341000000005,
    'longitude': 9.998654,
    'zoom': 16
  },
  'id': 1
};

export const mockFalseFavoriteOffer = {
  'city': {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  'preview_image': 'https://8.react.pages.academy/static/hotel/6.jpg',
  'images': [
    'https://8.react.pages.academy/static/hotel/8.jpg',
    'https://8.react.pages.academy/static/hotel/20.jpg',
    'https://8.react.pages.academy/static/hotel/11.jpg',
    'https://8.react.pages.academy/static/hotel/15.jpg',
    'https://8.react.pages.academy/static/hotel/10.jpg',
    'https://8.react.pages.academy/static/hotel/12.jpg',
    'https://8.react.pages.academy/static/hotel/1.jpg',
    'https://8.react.pages.academy/static/hotel/19.jpg',
    'https://8.react.pages.academy/static/hotel/14.jpg',
    'https://8.react.pages.academy/static/hotel/13.jpg',
    'https://8.react.pages.academy/static/hotel/7.jpg',
    'https://8.react.pages.academy/static/hotel/6.jpg',
    'https://8.react.pages.academy/static/hotel/18.jpg',
    'https://8.react.pages.academy/static/hotel/16.jpg'
  ],
  'title': 'Amazing and Extremely Central Flat',
  'is_favorite': false,
  'is_premium': false,
  'rating': 4.7,
  'type': 'apartment',
  'bedrooms': 1,
  'max_adults': 9,
  'price': 462,
  'goods': [
    'Laptop friendly workspace',
    'Baby seat',
    'Air conditioning',
    'Washer',
    'Breakfast'
  ],
  'host': {
    'id': 25,
    'name': 'Angelina',
    'is_pro': true,
    'avatar_url': 'img/avatar-angelina.jpg'
  },
  'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  'location': {
    'latitude': 53.534341000000005,
    'longitude': 9.998654,
    'zoom': 16
  },
  'id': 1
};
