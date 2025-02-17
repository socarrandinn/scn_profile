import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';

export interface IStock {
  _id?: string;
  warehouse: string;
  warehouseArea?: string;
  responsible?: string | null;
  quantity: number;
  evidence?: string | null;
  operation: PRODUCT_STOCK_OPERATIONS;
  note?: string;
  providerType?: PROVIDER_TYPE_ENUM | null;
  cause?: IStockReductionCause | null;
}

export interface IStockWarehouse {
  warehouse: string;
  logistic: string;
  visible: boolean;
  enable: boolean;
  locations: string[];
}
