import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { COST_TYPE } from '../../common/constants/cost-type.enum';
export interface FeaturePricePayload {
  price: number;
  value: number;
}

export interface TimeRange {
  from: number;
  to: number;
}

export interface ILocation {
  type: LOCATION_TYPE;
  municipality: string | null;
  state: string | null;
  country: string | null;
}

export interface IHomeDelivery {
  _id?: string;
  price: number;
  customPrice?: COST_TYPE;
  global?: boolean;
  weightPrice: FeaturePricePayload;
  volumePrice: FeaturePricePayload;
  time: TimeRange;
  enabled?: boolean;
  location?: ILocation;
}
