import { IAddress } from 'modules/common/interfaces';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { IOrderInvoice } from './IOrderInvoice';
import { IValidation } from './IValidation';

export interface IOrder {
  _id?: string;
  code: string;
  shipping: IShipping;
  shippingPackage: IShippingPackage;
  billing: IBilling;
  status: IOrderStatus;
  invoice?: IOrderInvoice;
}

export interface IBilling {
  gateway: string;
  billingClient: IBillingClient;
  hasPayment: boolean;
  paymentDate: string;
  hasChargeBack: boolean;
  chargeBackDate: string;

  mixed?: boolean;
}

export interface IBillingClient {
  firstName: string;
  lastName: string;
  identityNumber: string;
  cardNumberMask: string;
}

export interface IShippingPackage {
  weight: number;
  volume: number;
  needsRefrigeration: boolean;
  isFragile: boolean;
}

export interface IShipping {
  person: IPerson;
  alternativePerson: IPerson;
  address: IAddress;
  shippingType: string;
  deliveryTimeType: string;

  note?: string;
  verification: IValidation
}

export interface Location {
  type: string;
  coordinates: string[];
}

export interface IPerson {
  firstName: string;
  contactId?: string;
  lastName: string;
  identityNumber: string;
  email?: string;
  phone?: string;
}
