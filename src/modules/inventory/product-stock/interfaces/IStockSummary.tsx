import { IProduct } from 'modules/inventory/common/interfaces';
import { ISupplierSummary } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouse, IWarehouseSummary } from 'modules/inventory/warehouse/interfaces';

export enum STOCK_SUMMARY_CASE {
  productNoExist = 'productNoExist',
  invalidArea = 'invalidArea',
  stockReductionWithInvalidCause = 'stockReductionWithInvalidCause',
  warehouseNoExist = 'warehouseNoExist',
  warehouseSupplierNoExist = 'warehouseSupplierNoExist',
  stockWithInvalidQuantity = 'stockWithInvalidQuantity',
}

export interface IStockSummary {
  message: string;
  summary: {
    total: number;
    error: number;
    productWithErrors: Array<{ code: string; count: 4 }>;
  };
  details: IStockDetailCallback;
}

export interface IStockDetailCallback {
  productNoExist?: Array<{ code: string }>;
  invalidArea?: Array<{ areaName: string | null; productCount: number }>;
  stockReductionWithInvalidCause?: Array<{ code: string | null; causeName: string }>;
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
  stockWithInvalidQuantity?: Array<{ code: string; areaName: string | null; productName: string }>;
}

export interface IWarehouseSupplierNoExist {
  item: string;
  warehouse: IWarehouseSummary;
  supplier: ISupplierSummary;
}

export interface IItemUpdateStockError {
  item: Pick<IProduct, '_id' | 'name'>;
  warehouseArea: Pick<IWarehouse, '_id' | 'name'>;
  stock: number;
  quantity: number;
}
