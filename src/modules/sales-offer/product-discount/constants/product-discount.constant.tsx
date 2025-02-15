import { IStatus } from '@dfl/mui-react-common';
import { t } from 'i18next';
import { GREEN, RED } from 'settings/theme';

export enum DISCOUNT_TYPE {
  FIXED = 'FIXED',
  PERCENT = 'PERCENT',
}

export const OFFER_TYPES = [
  {
    value: 'FIXED',
    label: 'productDiscount:discountTypes.FIXED',
  },
  {
    value: 'PERCENT',
    label: 'productDiscount:discountTypes.PERCENT',
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

export enum DISCOUNT_STATUS {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  SCHEDULED = 'SCHEDULED',
  FINISHED = 'FINISHED',
}
