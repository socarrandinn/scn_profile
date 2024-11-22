export enum ERRORS {
  WAREHOUSE_SUPPLIER_STOCK_EXIST = 'IWS001',
}

export const DELETE_WAREHOUSE_ERRORS = {
  [ERRORS.WAREHOUSE_SUPPLIER_STOCK_EXIST]: {
    title: 'errors:generalError',
    description: 'errors:providers.WAREHOUSE_SUPPLIER_STOCK_EXIST',
  },
};
