import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/use-map';
import { Offer, Location } from './../../types/offer';
import L from 'leaflet';
import { IconUrl, IconData, FIRST_ELEMENT_INDEX } from './../../const';

type MapProps = {
  offers: Offer[];
  currentActiveCard: number | null;
  mapStyle: string;
};

const getPin = (cardId: number, activeCardId: number | null) => L.icon({
  iconUrl: cardId === activeCardId ? IconUrl.Active : IconUrl.Default as string,
  iconSize: IconData.SIZES,
  iconAnchor: IconData.ANCHORE_COORDINATES,
});


function Map({ offers, currentActiveCard, mapStyle }: MapProps): JSX.Element {

  const cityLocation: Location = offers[FIRST_ELEMENT_INDEX].city.location;
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, cityLocation) as L.Map;

  useEffect(() => {
    if (map) {
      const cityCenterPreferences: [[number, number], number] = [
        [
          offers[FIRST_ELEMENT_INDEX].city.location.latitude,
          offers[FIRST_ELEMENT_INDEX].city.location.longitude,
        ],
        offers[FIRST_ELEMENT_INDEX].city.location.zoom,
      ];
      map.setView(...cityCenterPreferences);

      const layerGroup = L.layerGroup();
      offers.forEach((offer) => {
        L.marker([offer.location.latitude, offer.location.longitude], {
          icon: getPin(offer.id, currentActiveCard),
        }).addTo(layerGroup);
      });
      map.addLayer(layerGroup);

      return () => {
        map.removeLayer(layerGroup);
      };
    }
  });

  return <section ref={mapRef} className={`${mapStyle} map`}></section>;
}

export default Map;
