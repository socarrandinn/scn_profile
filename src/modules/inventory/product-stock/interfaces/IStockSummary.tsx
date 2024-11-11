import { IProduct } from 'modules/inventory/common/interfaces';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

export enum STOCK_SUMMARY_CASE {
  SUPPLIER_NO_RELATION = 'SUPPLIER_NO_RELATION',
  STOCK_REDUCTION_NOT_PERFORMED = 'STOCK_REDUCTION_NOT_PERFORMED',
  STOCK_ADDICTION_NOT_PERFORMED = 'STOCK_ADDICTION_NOT_PERFORMED',
}

export interface IStockSummary {
  error: {
    total: number;
    list: any;
  };
  success: {
    total: number;
    list: any;
  };
}

export interface IStockDetailCallback {
  productNoExist: [];
  warehouseNoExist: [];
  warehouseSupplierNoExist: IWarehouseSupplierNoExist[];
  productReductionError: IItemUpdateStockError[];
}

export interface IWarehouseSupplierNoExist {
  item: string;
  warehouse: IWarehouse;
  supplier: ISupplier;
}
export interface IItemUpdateStockError {
  item: Pick<IProduct, '_id' | 'name'>;
  warehouseArea: Pick<IWarehouse, '_id' | 'name'>;
  stock: number;
  quantity: number;
}
