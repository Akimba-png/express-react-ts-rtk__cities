export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Room = '/offer/:offerId',
  Favorites = '/favorites',
  NotFound = '*',
}

export enum ApiRoute {
  Offers = '/hotels/',
  Comments = '/comments/',
}

export enum StatusCode {
  NotFound = 404,
}

export enum StarRating {
  '0%',
  '20%',
  '40%',
  '60%',
  '80%',
  '100%',
}

export enum Month {
 'January',
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December',
}

export enum IconUrl {
  Default = '/img/pin.svg',
  Active = '/img/pin-active.svg',
}

export const IconData = {
  SIZES: [27, 39] as [number, number],
  ANCHORE_COORDINATES: [14, 39] as [number, number],
} as const;

export const FIRST_ELEMENT_INDEX = 0;
export const COMMENT_DATE_LENGTH = 10;
export const MAX_COMMENTS_COUNT = 9;
export const MAX_RATING_VALUE = 5;
export const OFFERS_NEARBY_RANGE = [1, 4];
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export const DEFAULT_CITY = 'Paris';

export enum SortingOptions {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HighPrice = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum starRatingDescription{
  Perfect = 'perfect',
  Good = 'good',
  NotBad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly',
}

export enum CommentLength {
  Min = 50,
  Max = 300,
}
