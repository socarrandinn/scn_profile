import { PAYMENT_AGREEMENT_STATUS_ENUM } from '../constants/payment-agreement.enum';

export interface IPaymentAgreement {
  _id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  status: PAYMENT_AGREEMENT_STATUS_ENUM;
  driver: string;
  estimatedShippingCost: number;
  owner: string;
  quantityOrders: number;
  sendDate: Date;
  shippingCost: number;
}
