import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';
import { ADMIN_REVIEW_STATUS_ENUM } from '../interfaces';

export const ADMIN_REVIEW_STATUS: IStatus[] = [
  { _id: ADMIN_REVIEW_STATUS_ENUM.PENDING, title: `status.${ADMIN_REVIEW_STATUS_ENUM.PENDING}`, color: GREEN },
  { _id: ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, title: `status.${ADMIN_REVIEW_STATUS_ENUM.ACCEPTED}`, color: RED },
];

// Access to the option value in O(1)
export const ADMIN_REVIEW_STATUS_MAP = new Map<ADMIN_REVIEW_STATUS_ENUM, IStatus>([
  [ADMIN_REVIEW_STATUS_ENUM.PENDING, ADMIN_REVIEW_STATUS[0]], // take in maid that the order can't change!!
  [ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, ADMIN_REVIEW_STATUS[1]], // take in maid that the order can't change!!
]);
