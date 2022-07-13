import Card from '../card/card';
import { Offer } from '../../../types/offer';

enum RoomCardStyle {
  Article = 'near-places__card',
  Wrapper = 'near-places__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

function RoomCard(props: {hotelData: Offer}): JSX.Element {
  return <Card cardStyle={RoomCardStyle} {...props}/>;
}

export default RoomCard;
