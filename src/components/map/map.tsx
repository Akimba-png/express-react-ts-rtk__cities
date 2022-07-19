import { useEffect, useRef } from 'react';
import { useMap } from './../../hooks/use-map';
import { Offer, Location } from './../../types/offer';
import L from 'leaflet';
import { IconUrl, IconData, FIRST_ELEMENT_INDEX } from './../../const';

type MapProps = {
  offers: Offer[];
};

function Map({ offers }: MapProps): JSX.Element {
  const cityLocation: Location = offers[FIRST_ELEMENT_INDEX].city.location;
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, cityLocation) as L.Map;

  const pin = L.icon({
    iconUrl: IconUrl.Default,
    iconSize: IconData.SIZES,
    iconAnchor: IconData.ANCHORE_COORDINATES,
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        L.marker([offer.city.location.latitude, offer.city.location.longitude], {icon: pin}).addTo(map);
      });
    }
  });

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;
