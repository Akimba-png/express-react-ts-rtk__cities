import { Offers } from '../../../types/offer';
import Map from '../map';

const ROOM_PAGE_MAP_STYLE = 'property__map';

type RoomPageMapProps = {
  filteredOffers: Offers;
  currentActiveCardId: number;
};

function RoomPageMap({
  filteredOffers,
  currentActiveCardId,
}: RoomPageMapProps): JSX.Element {
  return (
    <Map
      offers={filteredOffers}
      currentActiveCard={currentActiveCardId}
      mapStyle={ROOM_PAGE_MAP_STYLE}
    />
  );
}

export default RoomPageMap;
