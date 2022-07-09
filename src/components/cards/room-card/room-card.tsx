import { Hotel } from '../../../types/hotel';
import Card from '../card/card';

enum RoomCardStyle {
  Article = 'near-places__card',
  Wrapper = 'near-places__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

function RoomCard(props: {hotelData: Hotel}): JSX.Element {
  return <Card cardStyle={RoomCardStyle} {...props}/>;
}

export default RoomCard;
