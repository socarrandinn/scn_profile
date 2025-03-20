import { IAddress } from 'modules/common/interfaces';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { IOrderInvoice } from './IOrderInvoice';
import { IOrderProductItem } from './IOrderProductItem';
import { IOrderOfferItem } from './IOrderOfferItem';
import {
  DELIVERY_TIME_TYPE_ENUM,
  SHIPPING_TYPE_ENUM,
  DELIVERY_STATUS_ENUM,
} from 'modules/sales/common/constants/order.enum';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IStatusHistory } from './IStatusHistory';
import { IDeliveryTimeRange } from './IOrderDelivery';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from '../constants/order-payments';
import { IClients } from 'modules/crm/clients/interfaces';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';

export interface IOrder {
  _id?: string;
  code: string;
  shipping: IShipping;
  shippingPackage: IShippingPackage;
  billing: IBilling;
  status: IOrderStatus;
  invoice?: IOrderInvoice;
  createdAt?: string;

  items: IOrderProductItem[];
  offers?: IOrderOfferItem[];

  suborders?: IOrder[];
  order?: Pick<IOrder, '_id' | 'code' | 'status'>;

  owner: string | IUser;
  statusHistory: IStatusHistory[];

  payment: IOrderPayment;

  client: Pick<IClients, 'fullName' | 'email' | 'phone' | '_id' | 'avatar'>;

  device: IOrderDevice;
  distributionCenter: IDistributionCenters;

  dispatch?: string;
}

export interface IOrderDevice {
  ip: string;
  device: {
    type: string;
  };
  client: {
    name: string;
    type: string;
    version: string;
  };
}

export interface IOrderPayment {
  paid: boolean;
  hasChargeBack: boolean;
  paymentMethod: PAYMENT_METHOD_ENUM;
  gateway: PAYMENT_GATEWAYS_ENUM;
  paidAt: Date;
  transactionId: string;

  currency: string
  exchangeRate: string,
  amount: number
}

export interface IBilling {
  person: IPerson;
  address: IAddress;
}

export interface IBillingClient extends Omit<IPerson, 'contactId'> {
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
  method: SHIPPING_TYPE_ENUM;
  timeType: DELIVERY_TIME_TYPE_ENUM;

  note?: string;
  // verification: IValidation;

  deliveryTimeRange?: IDeliveryTimeRange;
  deliveryDueDate?: string
  deliveryStatus?: DELIVERY_STATUS_ENUM;

  edited?: boolean;
  validate?: boolean;
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
