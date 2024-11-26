export enum ERRORS {
  WAREHOUSE_PRODUCTS_ASSOCIATED = 'IWS001',
}

export const DELETE_WAREHOUSE_ERRORS = {
  [ERRORS.WAREHOUSE_PRODUCTS_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:delete.WAREHOUSE_PRODUCTS_ASSOCIATED',
  },
};
