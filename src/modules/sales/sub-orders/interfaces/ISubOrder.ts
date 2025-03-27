import { IOrder } from 'modules/sales/common/interfaces/IOrder';

export interface ISubOrderDriver extends Pick<IOrder, '_id'> {
  driver: string | null;
  carrier: string | null;
}

export interface IStatusChange {
  status: string | null;
  filters: any;
}
