import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { IProduct } from 'modules/inventory/common/interfaces';
import { IFile } from 'components/FileDropZone/interfaces/IFile';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';

export interface IStock {
  _id?: string;
  item: IProduct | null;
  warehouse: IWarehouse | null;
  warehouseArea?: IWarehouseArea | string | null;
  quantity: number;
  operation: STOCK_OPERATIONS;
  note?: string;
  cause?: IStockReductionCause | null;
}

export interface IStockManyWarehouse extends Pick<IStock, 'warehouse' | 'note'> {
  items: Array<Pick<IStock, 'item' | 'cause' | 'quantity' | 'operation' | 'warehouseArea'>>;

  notClosed?: boolean; // only for evite closed
}

export interface IStockWarehouse {
  warehouse: string;
  logistic: string;
  visible: boolean;
  enable: boolean;
  locations: string[];
}

export interface IStockWarehouseImport extends Pick<IStock, 'warehouse'> {
  files?: IFile[];
}

export interface IStockProductItem extends Pick<IStock, 'item' | 'warehouse' | 'note' | 'cause'> {
  totalQuantity: number;
}
