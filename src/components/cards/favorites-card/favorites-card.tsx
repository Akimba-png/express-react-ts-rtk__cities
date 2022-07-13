import Card from '../card/card';
import { Offer } from '../../../types/offer';

enum FavoritesCardStyle {
  Article = 'favorites__card',
  Wrapper = 'favorites__image-wrapper',
  ImageWidth = '150px',
  ImageHeight = '110px',
  CardInfo = 'favorites__card-info',
}

function FavoritesCard(props: {hotelData: Offer}): JSX.Element {
  return <Card cardStyle={FavoritesCardStyle} {...props} />;
}

export default FavoritesCard;
