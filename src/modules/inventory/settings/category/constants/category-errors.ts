export enum ERRORS {
  CATEGORY_PRODUCTS_ASSOCIATED = 'ISC001',
}

export const DELETE_CATEGORY_ERRORS = {
  [ERRORS.CATEGORY_PRODUCTS_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:delete.CATEGORY_PRODUCTS_ASSOCIATED',
  },
};
