import { Offers } from './../../../types/offer';
import Card from '../card/card';

enum RoomCardStyle {
  Article = 'near-places__card',
  Wrapper = 'near-places__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

type RoomCardsContainerProps = {
  offers: Offers
}

function RoomCardsContainer({offers}: RoomCardsContainerProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((hotelData) => (
          <Card cardStyle={RoomCardStyle} hotelData={hotelData} key={hotelData.id}/>
        ))}
      </div>
    </section>
  );
}

export default RoomCardsContainer;
