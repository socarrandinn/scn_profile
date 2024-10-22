import { IOrder } from 'modules/sales/common/interfaces/IOrder';

export interface ISubOrder extends IOrder {
  warehouse: string // todo
}
