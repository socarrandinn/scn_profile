import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { COST_TYPE } from '../constants/cost-type.enum';

export interface FeaturePricePayload {
  price: number;
  value: number;
}

export interface TimeRange {
  from: number;
  to: number;
}

export interface ILocation {
  type: LOCATION_TYPE | null;
  city?: string | null;
  state: string | null;
  country: string | null;
}

export interface IDelivery {
  _id?: string;
  hasExpress: boolean;
  space?: string;
  expressPrice?: number;
  expressTime?: TimeRange;
  price: number;
  customPrice?: COST_TYPE;
  global?: boolean;
  weightPrice: FeaturePricePayload;
  volumePrice: FeaturePricePayload;
  time: TimeRange;
  enabled?: boolean;
  location?: ILocation;
}
