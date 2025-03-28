import { IOrder } from 'modules/sales/common/interfaces/IOrder';

export interface ISubOrderDriver extends Pick<IOrder, '_id'> {
  driver: string | null;
  carrier: string | null;
}

export interface IStatusChange {
  status: string | null;
  filters: any;
}

export interface IOrderStatusImport {
  file?: File | null;
}

export enum ORDER_STATUS_SUMMARY_CASE {
  suborderNoExist = 'suborderNoExist',
  statusNoExist = 'statusNoExist',
  dataError = 'dataError',
}

export interface IOrderStatusSummary {
  details: IOrderStatusDetailCallback;
  message: string;
  summary: {
    total: number;
    error: number;
    suborderNoExist: string[]
    statusNoExist: string[]
  };

  showDetail: boolean;
}

export interface IOrderStatusSuccessData {
  total: number;
  success: number;
  error: number;
  dataError: [];
}

export interface IOrderStatusDetailCallback {
  title: string;
}
