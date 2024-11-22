export enum ERRORS {
  PRODUCTS_ASSOCIATED = 'IPS005',
  WAREHOUSES_ASSOCIATED = 'IPL002',
  PRODUCTS_MANUFACTURER_ASSOCIATED = 'IPM006',
}

export const DELETE_PROVIDER_ERRORS = {
  [ERRORS.PRODUCTS_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:delete.PRODUCTS_ASSOCIATED',
  },
  [ERRORS.WAREHOUSES_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:delete.WAREHOUSES_ASSOCIATED',
  },
  [ERRORS.PRODUCTS_MANUFACTURER_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:delete.PRODUCTS_MANUFACTURER_ASSOCIATED',
  },
};
