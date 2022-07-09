import Card from '../card/card';

enum MainCardStyle {
  Article = 'cities__place-card',
  Wrapper = 'cities__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}


function MainCard(): JSX.Element {
  return (
    <Card cardStyle={MainCardStyle}/>
  );
}

export default MainCard;
