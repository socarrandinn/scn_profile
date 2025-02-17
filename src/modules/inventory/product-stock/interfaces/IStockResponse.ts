import { IImageMedia } from 'modules/common/interfaces';
import { ICategory } from 'modules/inventory/product/interfaces/IProductCreate';

export interface IProductStockResponse {
  total: number;
  data: IProductStockItem[];
  stockResume: IStockResume;
}
export interface IProductStockItem {
  _id: string;
  warehouse: string;
  warehouseName: string;
  responsible?: string;
  warehouseArea: WarehouseArea;
  visible: boolean;
  logistic: string;
  logisticName: string;
  stock: number;
  available: number;
  reservation: number;
  allStock: number;
  allSold: number;
}

export interface IWarehouseStockItem {
  _id: string;
  code: string;
  visible: boolean;
  price: number;
  category: ICategory;
  name: string;
  media: IImageMedia[];
  createdAt: string;
  updatedAt: string;
  cost: number;
  stock: number;
  available: number;
  reservation: number;
  allStock: number;
  responsible?: string | null;
  allSold: number;
  warehouseArea: WarehouseArea;
}

export interface WarehouseArea {
  areaId: string;
  name: string;
}

export interface IStockResume {
  stock: number;
  available: number;
  reservation: number;
  allStock: number;
  allSold: number;
}
