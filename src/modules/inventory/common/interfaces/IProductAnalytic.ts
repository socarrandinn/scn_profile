export enum PRODUCT_ANALYTIC_METRIC {
  STORE_DISTRIBUTION = 'warehouse-distribution',
}

export interface IWarehouseDistribution {
  total: number;
  warehouseName: string;
  visibles: number;
  hasStock: number;
  notStock: number;
  warehouse: string;
  coverage: number;
  of: number;
}
