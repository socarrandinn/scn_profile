export enum PRODUCT_ANALYTIC_METRIC {
  STORE_DISTRIBUTION = 'warehouse-distribution',
}

export interface IStoreDistribution {
  total: number;
  storeName: string;
  visibles: number;
  hasStock: number;
  notStock: number;
  store: string;
  coverage: number;
  of: number;
}
