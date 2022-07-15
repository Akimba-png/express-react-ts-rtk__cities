import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../types/offer';
import { useRef, useEffect, MutableRefObject } from 'react';


export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, mapDetail: Location) => {
  const {latitude, longitude, zoom} = mapDetail;
  const mapInstance = useRef<L.Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && mapInstance.current === null) {
      mapInstance.current = L.map(mapRef.current).setView([latitude, longitude], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);
    }
  }, [mapDetail]);
  return mapInstance.current;
};
