import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export interface IStock {
  _id?: string;
  store: string;
  storeArea: string;
  quantity: number;
  operation: PRODUCT_STOCK_OPERATIONS;
  note?: string;
  cause?: string;
}
