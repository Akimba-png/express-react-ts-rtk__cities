import { connect, ConnectedProps } from 'react-redux';
import { AppDispatch } from '../../../types/thunk';
import { setActiveCardId } from '../../../store/action';
import { getSortedOffers } from '../../../store/selector';
import { State } from '../../../store/root-reducer';
import Card from '../card/card';

enum MainCardStyle {
  Article = 'cities__place-card',
  Wrapper = 'cities__image-wrapper',
  ImageWidth = '260px',
  ImageHeight = '200px',
  CardInfo = '',
}

const mapStateToProps = (state: State) => ({
  sortedOffers: getSortedOffers(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleActiveCardChange(id: number | null) {
    dispatch(setActiveCardId(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function MainCardsContainer({sortedOffers, handleActiveCardChange}: PropsFromRedux): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((hotelData) => (
        <Card cardStyle={MainCardStyle} hotelData={hotelData} key={hotelData.id} onMouseEvent={handleActiveCardChange}/>
      ))}
    </div>
  );
}

export { MainCardsContainer };
export default connector(MainCardsContainer);
