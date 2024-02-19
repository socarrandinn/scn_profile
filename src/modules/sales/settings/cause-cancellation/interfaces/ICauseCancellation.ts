import { IPriceValue } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export interface ICauseCancellation {
  _id?: string;
  type: string;
  description?: string;
  visibility: boolean;
  createdAt?: Date;
  active?: boolean;
}

export interface ICauseCancellationSettings {
  maxElapsingTime: number;
  reimbursementCharge: IPriceValue;
}
