import Card from '../card/card';
import { Offer } from '../../../types/offer';

enum MainCardStyle {
  Article = 'cities__place-card',
  Wrapper = 'cities__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

function MainCard(props: {hotelData: Offer}): JSX.Element {
  return (
    <Card cardStyle={MainCardStyle} {...props}/>
  );
}

export default MainCard;
