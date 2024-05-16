import { IStatus } from '@dfl/mui-react-common';
import { GRAY, GREEN, RED } from 'settings/theme';
import { ADMIN_REVIEW_STATUS_ENUM } from '../interfaces';

export const ADMIN_REVIEW_STATUS: IStatus[] = [
  { _id: ADMIN_REVIEW_STATUS_ENUM.PENDING, title: ADMIN_REVIEW_STATUS_ENUM.PENDING, color: GRAY },
  { _id: ADMIN_REVIEW_STATUS_ENUM.NEED_REVIEW, title: ADMIN_REVIEW_STATUS_ENUM.NEED_REVIEW, color: GREEN },
  { _id: ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, title: ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, color: GREEN },
  { _id: ADMIN_REVIEW_STATUS_ENUM.REJECTED, title: ADMIN_REVIEW_STATUS_ENUM.REJECTED, color: RED },
];

export const ADMIN_REVIEW_STATUS_MAP = new Map<ADMIN_REVIEW_STATUS_ENUM, IStatus>([
  [ADMIN_REVIEW_STATUS_ENUM.PENDING, ADMIN_REVIEW_STATUS[0]],
  [ADMIN_REVIEW_STATUS_ENUM.NEED_REVIEW, ADMIN_REVIEW_STATUS[1]],
  [ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, ADMIN_REVIEW_STATUS[2]],
  [ADMIN_REVIEW_STATUS_ENUM.REJECTED, ADMIN_REVIEW_STATUS[3]],
]);
