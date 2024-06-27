import { IStatus } from '@dfl/mui-react-common';
import { t } from 'i18next';
import { GREEN, RED } from 'settings/theme';

export enum DISCOUNT_TYPE {
  FIXED = 'FIXED',
  PERCENTAGE = 'PERCENTAGE',
}

export const OFFER_TYPES = [
  {
    value: 'FIXED',
    label: 'productDiscount:discountTypes.FIXED',
  },
  {
    value: 'PERCENTAGE',
    label: 'productDiscount:discountTypes.PERCENTAGE',
  },
];

export const PRODUCT_DISCOUNT_ENABLED: IStatus[] = [
  { _id: 'true', title: t('productDiscount:enabledTypes.ACTIVE'), color: GREEN },
  { _id: 'false', title: t('productDiscount:enabledTypes.INACTIVE'), color: RED },
];

export const PRODUCT_DISCOUNT_ENABLED_MAP = new Map<boolean, IStatus>([
  [true, PRODUCT_DISCOUNT_ENABLED[0]],
  [false, PRODUCT_DISCOUNT_ENABLED[1]],
]);

export const PRODUCT_DISCOUNT_TYPE: IStatus[] = [
  { _id: DISCOUNT_TYPE.PERCENTAGE, title: t('productDiscount:discountTypes.PERCENTAGE'), color: GREEN },
  { _id: DISCOUNT_TYPE.FIXED, title: t('productDiscount:discountTypes.FIXED'), color: GREEN },
];

export const PRODUCT_DISCOUNT_TYPE_MAP = new Map<string, IStatus>([
  [DISCOUNT_TYPE.PERCENTAGE, PRODUCT_DISCOUNT_TYPE[0]],
  [DISCOUNT_TYPE.FIXED, PRODUCT_DISCOUNT_TYPE[1]],
]);
