import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../../store/root-reducer';
import { getFilteredOffers } from '../../../store/selector';
import { getCurrentActiveCard } from '../../../store/app-interface/selector';
import Map from './../map';

const MAIN_PAGE_MAP_STYLE = 'cities__map';

const mapStateToProps = (state: State) => ({
  filteredOffers: getFilteredOffers(state),
  currentActiveCardId: getCurrentActiveCard(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

function MainPageMap({filteredOffers, currentActiveCardId}: PropsFromRedux): JSX.Element {
  return (
    <Map offers={filteredOffers} currentActiveCard={currentActiveCardId} mapStyle={MAIN_PAGE_MAP_STYLE}/>
  );
}

export default connector(MainPageMap);
