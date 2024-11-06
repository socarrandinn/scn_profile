import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { IProduct } from 'modules/inventory/common/interfaces';

export interface IStock {
  _id?: string;
  product: IProduct | null;
  warehouse: string;
  warehouseArea?: string;
  quantity: number;
  operation: STOCK_OPERATIONS;
  note?: string;
  cause?: IStockReductionCause | null;
}

export interface IStockWarehouse {
  warehouse: string;
  logistic: string;
  visible: boolean;
  enable: boolean;
  locations: string[];
}

export interface IStockProductItem extends Pick<IStock, 'product' | 'warehouse' | 'note' | 'cause'> {
  totalQuantity: number;
}
