import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

export interface FeaturePricePayload {
  price: number;
  value: number;
};

export interface TimeRange {
  from: number;
  to: number;
};

export interface ILocation {
  type: LOCATION_TYPE;
  municipality: string;
  state: string;
  country: string;
};

export interface IHomeDelivery {
  _id?: string;
  price: number;
  weightPrice: FeaturePricePayload;
  volumePrice: FeaturePricePayload;
  time: TimeRange;
  enabled?: boolean;
  location?: ILocation;
};
