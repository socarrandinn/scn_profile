import { IStatus } from '@dfl/mui-react-common';
import { GREEN } from 'settings/theme';

export enum ORDER_STATUS_TYPE_ENUM {
  COMPLETED = 'COMPLETED',
  VALIDATED = 'VALIDATED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  PAID = 'PAID',
  PENDING_REFUNDED = 'PENDING_REFUNDED',
  REFUNDED = 'REFUNDED',
  CUSTOM = 'CUSTOM',
  CREATED = 'CREATED',
}

export const ORDER_STATUS: IStatus[] = Object.keys(ORDER_STATUS_TYPE_ENUM).map((st) => ({
  _id: st,
  title: `orderStatus:fields.orderStatusType.${st}`,
  color: GREEN,
}));
