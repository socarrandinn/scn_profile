import { ICoordinate } from './address';

export const getPosition = (location: ICoordinate | undefined): [number, number] => {
  if (!location) return [0, 0];
  return [+location.lat, +location.lng];
};

export const MAP_DEFAULT_ZOOM: number = 12;
