export enum PRODUCT_ANALYTIC_METRIC {
  STORE_DISTRIBUTION = 'store-distribution',
}

export interface IStoreDistribution {
  total: number;
  visibles: number;
  hasStock: number;
  notStock: number;
  store: string;
  coverage: number;
  of: number;
}
