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
