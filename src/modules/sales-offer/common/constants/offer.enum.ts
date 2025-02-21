export enum COLOR_TYPE {
  DISCOUNT_SHIPPING = 'error',
  DISCOUNT_ORDER = 'warning',
  PRODUCT_INCLUSION = 'success',
  CREDITS_ADDITION = 'info',
  COUPONS = 'primary',
}

export enum OFFER_STATUS {
  ACTIVE = 'ACTIVE',
  SCHEDULED = 'SCHEDULED',
  DISABLED = 'DISABLED',
  FINISHED = 'FINISHED',
}

export const MUNICIPALITY_ALL = {
  code: 'all',
  name: 'Todos los municipios',
  municipality: '00',
  type: 'MUNICIPALITY',
};
