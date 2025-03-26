import { IDispatchVerify } from 'modules/sales/dispatch/interfaces';
import { PAYMENT_AGREEMENT_STATUS_ENUM } from '../constants/payment-agreement.enum';

export interface IPaymentAgreement {
  _id?: string;
  name: string;
  shippingCost: number;
  driver: string;
  sendDate: Date;

  // no editable
  estimatedShippingCost?: number;
  quantityOrders?: number;
  status?: PAYMENT_AGREEMENT_STATUS_ENUM;
  owner?: string;
  createdAt?: Date;
}

export type PaymentAgreementDTO = Pick<
IPaymentAgreement,
'name' | 'shippingCost' | 'estimatedShippingCost' | 'driver' | 'sendDate'
> & {
  filters: any;
};

export interface IPaymentAgreementVerify extends Omit<IDispatchVerify, 'orderInDispatch'> {
  orderInPaymentAgreement: number;
}
