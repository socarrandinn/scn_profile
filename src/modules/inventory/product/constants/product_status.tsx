import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const PRODUCT_STATUS: IStatus[] = [
  { _id: 'true', title: 'statusProduct.active', color: GREEN },
  { _id: 'false', title: 'statusProduct.inactive', color: RED },
];

// Access to the option value in O(1)
export const PRODUCT_STATUS_MAP = new Map<boolean, IStatus>([
  [true, PRODUCT_STATUS[0]], // take in maid that the order can't change!!
  [false, PRODUCT_STATUS[1]], // take in maid that the order can't change!!
]);
