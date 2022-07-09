import { Hotel } from '../../../types/hotel';
import Card from '../card/card';

enum FavoritesCardStyle {
  Article = 'favorites__card',
  Wrapper = 'favorites__image-wrapper',
  ImageWidth = '150px',
  ImageHeight = '110px',
  CardInfo = 'favorites__card-info',
}

function FavoritesCard(props: {hotelData: Hotel}): JSX.Element {
  return <Card cardStyle={FavoritesCardStyle} {...props} />;
}

export default FavoritesCard;
