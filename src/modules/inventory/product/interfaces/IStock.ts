import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { PRODUCT_STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { IProduct } from './IProduct';

export enum LIST_ERROR_TYPE {
  LOCATION_ERROR = 'LOCATION_ERROR',
  OTHER_ERROR = 'OTHER_ERROR',
}

export enum COLOR_OPERATION {
  'ADD' = '#1a9afb',
  'DISCOUNTED' = '#FB1818',
}

export enum CAUSE_TYPE {
  LOSSES = 'LOSSES',
  ATTENTION_WORKERS = 'ATTENTION_WORKERS',
  INCIDENCES = 'INCIDENCES',
  EXPIRATION = 'EXPIRATION',
  OTHERS = 'OTHERS',
}

export enum COLOR_CAUSE {
  LOSSES = '#FB1818',
  ATTENTION_WORKERS = '#FBC532',
  INCIDENCES = '#3264FB',
  EXPIRATION = '#9632FB',
  OTHERS = '#FB3282',
}

export interface IStock {
  productId: string;
  warehouse?: string | any;
  warehouseArea?: string | any;
  operation?: string;
  quantity: number;
  file?: string;
  note?: string;
  cause?: IStockReductionCause | null
}

export interface IPartialStock {
  item: string | any;
  operation: PRODUCT_STOCK_OPERATIONS;
  quantity: number;
  stock: number;
  cause?: IStockReductionCause | null
}

export interface IAddProductStock {
  items: IPartialStock[];
  warehouse: string;
  note?: string;
  file?: string;
  cause?: CAUSE_TYPE;
  codeProduct?: string;
  errorProduct?: any;
  fileStock?: any;
  response?: IResponseStock;
  listErrorFile?: [];
}

export interface IResponseStock {
  error?: number;
  listError?: [];
  success?: number;
}

export interface IFileErrorProductStock {
  items?: IItems[];
  listError?: IListError[];
}

export interface IListError {
  record: {
    code: string;
    quantity: number;
  };
  reference: LIST_ERROR_TYPE;
}

export interface IItems {
  item: IProduct;
  quantity: number;
  stock: number;
}
