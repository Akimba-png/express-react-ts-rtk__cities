import Card from '../card/card';

enum RoomCardStyle {
  Article = 'near-places__card',
  Wrapper = 'near-places__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

function RoomCard(): JSX.Element {
  return <Card cardStyle={RoomCardStyle}/>;
}

export default RoomCard;
