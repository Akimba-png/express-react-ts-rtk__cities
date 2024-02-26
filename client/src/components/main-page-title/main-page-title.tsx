import { connect, ConnectedProps } from 'react-redux';
import { getFilteredOffers } from '../../store/selector';
import { State } from '../../store/root-reducer';
import { checkPluralPostfix } from '../../util';
import { FIRST_ELEMENT_INDEX } from '../../const';

const PLACE_DEFAULT = 'place';

const mapStateToProps = (state: State) => ({
  filteredOffers: getFilteredOffers(state),
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function MainPageTitle({filteredOffers}: PropsFromRedux): JSX.Element {
  const placesAvailable = filteredOffers.length;
  const cityName = filteredOffers[FIRST_ELEMENT_INDEX].city.name;
  return (
    <b className="places__found">{placesAvailable} {checkPluralPostfix(placesAvailable, PLACE_DEFAULT)} to stay in {cityName}</b>
  );
}

export { MainPageTitle };
export default connector(MainPageTitle);
