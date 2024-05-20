import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const STATIC_SITE_MAP_ITEM_STATUS: IStatus[] = [
  { _id: 'true', title: 'statusProduct.active', color: GREEN },
  { _id: 'false', title: 'statusProduct.inactive', color: RED },
];

// Access to the option value in O(1)
export const STATIC_SITE_MAP_ITEM_STATUS_MAP = new Map<boolean, IStatus>([
  [true, STATIC_SITE_MAP_ITEM_STATUS[0]], // take in maid that the order can't change!!
  [false, STATIC_SITE_MAP_ITEM_STATUS[1]], // take in maid that the order can't change!!
]);
