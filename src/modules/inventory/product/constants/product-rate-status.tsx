import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const PRODUCT_RATE_STATUS: IStatus[] = [
  { _id: 'true', title: 'rateStatus.deleted', color: RED },
  { _id: 'false', title: 'rateStatus.notDeleted', color: GREEN },
];

// Access to the option value in O(1)
export const PRODUCT_RATE_STATUS_MAP = new Map<boolean, IStatus>([
  [true, PRODUCT_RATE_STATUS[0]], // take in maid that the order can't change!!
  [false, PRODUCT_RATE_STATUS[1]], // take in maid that the order can't change!!
]);
