import { IAddress } from 'modules/common/interfaces';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { IOrderInvoice } from './IOrderInvoice';
import { IValidation } from './IValidation';
import { IOrderProductItem } from './IOrderProductItem';
import { IOrderOfferItem } from './IOrderOfferItem';
import {
  DELIVERY_TIME_TYPE_ENUM,
  SHIPPING_TYPE_ENUM,
  DELIVERY_STATUS_ENUM,
} from 'modules/sales/common/constants/order.enum';
import { ISubOrder } from 'modules/sales/sub-orders/interfaces';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IStatusHistory } from './IStatusHistory';
import { IDeliveryTimeRange } from './IOrderDelivery';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from '../constants/order-payments';
import { IClients } from 'modules/crm/clients/interfaces';

export interface IOrder {
  _id?: string;
  code: string;
  shipping: IShipping;
  shippingPackage: IShippingPackage;
  billing: IBilling;
  status: IOrderStatus;
  invoice?: IOrderInvoice;
  createdAt?: string;

  // todo - revisar si se integra
  warehouses?: string[];
  items: IOrderProductItem[];
  offers?: IOrderOfferItem[];
  Suborders?: ISubOrder[];

  owner: string | IUser;
  statusHistory: IStatusHistory[];

  payment: IOrderPayment;

  client: Pick<IClients, 'fullName' | 'email' | 'phone'>;
}

export interface IOrderPayment {
  paid: boolean;
  hasChargeBack: boolean;
  paymentMethod: PAYMENT_METHOD_ENUM;
  gateway: PAYMENT_GATEWAYS_ENUM;
  paidAt: Date;
  transactionId: string;
}

export interface IBilling {
  gateway: PAYMENT_GATEWAYS_ENUM
  billingClient: IBillingClient;
  hasPayment: boolean;
  paymentDate: string;
  hasChargeBack: boolean;
  chargeBackDate: string;

  // todo - revisar si se integra
  mixed?: boolean;
  information: any[];
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
  shippingType: SHIPPING_TYPE_ENUM;
  deliveryTimeType: DELIVERY_TIME_TYPE_ENUM;

  note?: string;
  verification: IValidation;

  deliveryTimeRange?: IDeliveryTimeRange;
  deliveryEstimatedDate?: Date;
  deliveryStatus?: DELIVERY_STATUS_ENUM;
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
