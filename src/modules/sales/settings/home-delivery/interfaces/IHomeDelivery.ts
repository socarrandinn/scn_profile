import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { COST_TYPE } from '../../common/constants/cost-type.enum';
import { TIME_TYPE } from '../../common/constants/time-type.enum';

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
  municipality: string;
  state: string;
  country: string;
}

export interface IHomeDelivery {
  _id?: string;
  price: number;
  costType?: COST_TYPE;
  timeType?: TIME_TYPE;
  weightPrice: FeaturePricePayload;
  volumePrice: FeaturePricePayload;
  time: TimeRange;
  enabled?: boolean;
  location?: ILocation;
}
