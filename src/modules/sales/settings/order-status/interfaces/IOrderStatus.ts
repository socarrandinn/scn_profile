import { ORDER_STATUS_TYPE_ENUM, ORDER_STATUS_VALIDATE_TYPE } from '../constants';
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
  validationType: ORDER_STATUS_VALIDATE_TYPE | null;

  isSystem?: boolean;
  isStart?: boolean;
  isFinal?: boolean;
  isError?: boolean;
  isInitPay?: boolean;
  isEndPay?: boolean;
  isCanceled?: boolean;
}
