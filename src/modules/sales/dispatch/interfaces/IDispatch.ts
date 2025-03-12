import { DISPATCH_STATUS_ENUM } from '../constants/dispatch.enum';

export interface IDispatch {
  _id?: string;
  owner: string;
  space: string;
  name: string;
  status: DISPATCH_STATUS_ENUM;
  createdAt: Date;
  updatedAt: Date;
  metrics: IDispatchMetrics;
}

export type DispatchDTO = Pick<IDispatch, 'name' | '_id'> & { filters: any };

export interface IDispatchMetrics {
  suborderCount: number;
  totalUniqueProducts: number;
  totalProducts: number;
  totalWeight: number;
  totalVolume: number;
  subordersByRegion: ISubordersByRegion[];
  minDate: Date;
  maxDate: Date;
}

export interface ISubordersByRegion {
  state: string;
  totalSuborders: number;
}

export interface IDispatchVerify {
  totalOrders: number;
  orderInDispatch: number;
  orderCompleted: number;
  isValid: boolean;
}
