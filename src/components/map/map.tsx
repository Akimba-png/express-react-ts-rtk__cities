import { useRef } from 'react';
import { useMap } from './../../hooks/use-map';
import { Offer, Location } from './../../types/offer';

type MapProps = {
  offers: Offer[];
};

function Map({ offers }: MapProps): JSX.Element {
  const cityLocation: Location = offers[0].city.location;
  const mapRef = useRef<HTMLElement | null>(null);
  useMap(mapRef, cityLocation);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;
