import { DECREASE_CAUSES_TYPE } from 'modules/inventory/product/constants/product-decrease-causes.enum';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export interface IStock {
  _id?: string;
  store: string,
  quantity: number,
  operation: PRODUCT_STOCK_OPERATIONS,
  note?: string,
  cause?: DECREASE_CAUSES_TYPE;
}
