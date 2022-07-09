import Card from '../card/card';

enum FavoritesCardStyle {
  Article = 'favorites__card',
  Wrapper = 'favorites__image-wrapper',
  ImageWidth = '150px',
  ImageHeight = '110px',
  CardInfo = 'favorites__card-info',
}

function FavoritesCard(): JSX.Element {
  return <Card cardStyle={FavoritesCardStyle} />;
}

export default FavoritesCard;
