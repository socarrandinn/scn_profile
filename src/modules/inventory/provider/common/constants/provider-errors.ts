export enum ERRORS {
  PRODUCTS_ASSOCIATED = 'IPS005',
  WAREHOUSES_ASSOCIATED = 'IPL002',
}

export const DELETE_PROVIDER_ERRORS = {
  [ERRORS.PRODUCTS_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:providers.PRODUCTS_ASSOCIATED',
  },
  [ERRORS.WAREHOUSES_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:providers.WAREHOUSES_ASSOCIATED',
  },
};
