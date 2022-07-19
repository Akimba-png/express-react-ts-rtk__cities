import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../types/offer';
import { useState, useEffect, MutableRefObject } from 'react';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, mapDetail: Location) => {
  const [map, setMap] = useState<L.Map | null>(null);
  useEffect(() => {
    const {latitude, longitude, zoom} = mapDetail;
    if (mapRef.current !== null && map === null) {
      const mapInstance = new Map(mapRef.current, {center: [latitude, longitude], zoom: zoom});
      const tileInstance = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      });
      mapInstance.addLayer(tileInstance);
      setMap(mapInstance);
    }
    return () => {mapRef.current = null;};
  }, [map, mapRef, mapDetail]);
  return map;
};
