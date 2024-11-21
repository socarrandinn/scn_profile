import { IProduct } from 'modules/inventory/common/interfaces';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

export enum STOCK_SUMMARY_CASE {
  productNoExist = 'productNoExist',
  productWithInvalidArea = 'productWithInvalidArea',
  productWithInvalidReductionCause = 'productWithInvalidReductionCause',
  warehouseNoExist = 'warehouseNoExist',
  warehouseSupplierNoExist = 'warehouseSupplierNoExist',
}

export interface IStockSummary {
  message: string;
  summary: {
    total: number;
    error: number;
  };
  details: IStockDetailCallback;
}

export interface IStockDetailCallback {
  productNoExist?: Array<{ code: string }>;
  productWithInvalidArea?: Array<{ code: string | null; areaName: string }>;
  productWithInvalidReductionCause?: Array<{ code: string | null; causeName: string }>;
  warehouseNoExist?: Array<{ item: string; warehouse: string }>;
  warehouseSupplierNoExist?: Array<{
    item: string;
    warehouse: {
      warehouseId: string;
      name: string;
    };
    supplier: {
      supplierId: string;
      name: string;
    };
  }>;
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
