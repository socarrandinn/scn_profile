import { IDeliveryRules } from './IProductCreate';

interface IShippingInfo {
  weight: number;
  length: number;
  width: number;
  height: number;
}

export interface IProductShippingInfo {
  _id: string;
  deliveryRules: IDeliveryRules;
  shippingInfo: IShippingInfo;
}
