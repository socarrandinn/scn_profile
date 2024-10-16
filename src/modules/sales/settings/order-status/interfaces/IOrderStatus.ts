import { INotification } from './INotification';

export interface IOrderStatus {
  _id?: string;
  title: string;
  description: string;
  order: number;
  tracking: boolean;
  color?: string;
  allowTo?: string[];
  notification: INotification;
  type?: ORDER_STATUS_TYPE_ENUM;

  isSystem?: boolean;
  isStart?: boolean;
  isFinal?: boolean;
  isError?: boolean;
  isInitPay?: boolean;
  isEndPay?: boolean;
  isCanceled?: boolean;
}

export enum ORDER_STATUS_TYPE_ENUM {
  CREATED = 'CREATED',
  ENDED = 'ENDED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  PAYED = 'PAYED',
  PENDING_REFUNDED = 'PENDING_REFUNDED',
  REFUNDED = 'REFUNDED',
  VALIDATE = 'VALIDATE',
  CUSTOM = 'CUSTOM',
}
