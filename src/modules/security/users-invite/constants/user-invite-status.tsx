import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED, GRAY } from 'settings/theme';
import { USER_INVITE_STATUS_ENUM } from '../interfaces';

export const USER_INVITE_STATUS: IStatus[] = [
  { _id: USER_INVITE_STATUS_ENUM.ACCEPTED, title: `statusName.${USER_INVITE_STATUS_ENUM.ACCEPTED}`, color: GREEN },
  { _id: USER_INVITE_STATUS_ENUM.PENDING, title: `statusName.${USER_INVITE_STATUS_ENUM.PENDING}`, color: GRAY },
  { _id: USER_INVITE_STATUS_ENUM.CANCELED, title: `statusName.${USER_INVITE_STATUS_ENUM.CANCELED}`, color: RED }
];

export const USER_INVITE_STATUS_PENDING: IStatus[] = [USER_INVITE_STATUS[2]];

// Access to the option value in O(1)
export const USER_INVITE_STATUS_MAP = new Map<USER_INVITE_STATUS_ENUM, IStatus>([
  [USER_INVITE_STATUS_ENUM.ACCEPTED, USER_INVITE_STATUS[0]],
  [USER_INVITE_STATUS_ENUM.PENDING, USER_INVITE_STATUS[1]],
  [USER_INVITE_STATUS_ENUM.CANCELED, USER_INVITE_STATUS[2]],
]);
