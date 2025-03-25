import { PAYMENT_AGREEMENT_STATUS_ENUM } from '../constants/payment-agreement.enum';

export interface IPaymentAgreement {
  _id?: string;
  name: string;
  shippingCost: number;
  estimatedShippingCost: number;
  driver: string;
  sendDate: Date;

  // no editable
  quantityOrders?: number;
  status?: PAYMENT_AGREEMENT_STATUS_ENUM;
  owner?: string;
  createdAt?: Date;
}
