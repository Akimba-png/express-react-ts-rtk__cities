export const FIRST_ELEMENT_INDEX = 0;
export const COMMENT_DATE_LENGTH = 10;
export const MAX_COMMENTS_COUNT = 9;
export const MAX_RATING_VALUE = 5;
export const OFFERS_NEARBY_RANGE = [1, 4];
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export const DEFAULT_CITY = 'Paris';
export const VALIDATOR_MESSAGE_SHOW_TIME = 2000;
export const EMPTY_STRING = '';
export const EMPTY_LIST = 0;
export const FAKE_CONTENT = 'page-content';

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
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite/',
}

export enum AuthorisationStatus {
  Auth = 'auth',
  NotAuth = 'notAuth',
  Unknow = 'unknow',
}

export enum StatusCode {
  NotFound = 404,
  Success = 200,
  UnAuthorized = 401,
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

export enum SuffixEnding {
  Single = 1,
  Plural = 5,
}

export enum ValidateOption {
  MaxLength = 'maxLength',
  MinLength = 'minLength',
  NotEmpty = 'notEmpty',
  RegExp = 'regExp',
}

export enum SignInInvalidText {
  Login = 'корректный формат: example@example.ru',
  Password = 'цифро-буквы должны быть здесь:)',
}

export const signInvalidatorMessageStyle = {
  position: 'absolute',
  bottom: '4px',
  left: '5px',
};

export enum ErrorToastParam {
  Text = 'Something strange is going here...\nTry again later...',
  ShowTime = 3000,
  OfferShowTime = 4000,
}
