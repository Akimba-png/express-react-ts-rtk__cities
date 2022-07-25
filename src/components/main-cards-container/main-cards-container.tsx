import { connect, ConnectedProps } from 'react-redux';
import { AppDispatch } from '../../types/thunk';
import { setActiveCardId } from '../../store/action';
import Card from '../cards/card/card';
import { offers } from './../../mock';

enum MainCardStyle {
  Article = 'cities__place-card',
  Wrapper = 'cities__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleActiveCardChange(id: number | null) {
    dispatch(setActiveCardId(id));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function MainCardsContainer({handleActiveCardChange}: PropsFromRedux): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((hotelData) => (
        <Card cardStyle={MainCardStyle} hotelData={hotelData} key={hotelData.id} onMouseEvent={handleActiveCardChange}/>
      ))}
    </div>
  );
}

export default connector(MainCardsContainer);
