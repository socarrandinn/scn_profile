import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';

export interface IStock {
  _id?: string;
  warehouse: string;
  warehouseArea?: string;
  quantity: number;
  operation: PRODUCT_STOCK_OPERATIONS;
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
