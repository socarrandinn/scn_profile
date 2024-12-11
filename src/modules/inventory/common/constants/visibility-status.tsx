import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const VISIBILITY_STATUS: IStatus[] = [
  { _id: 'true', title: 'common:fields.visible.active', color: GREEN },
  { _id: 'false', title: 'common:fields.visible.inactive', color: RED },
];

export const VISIBILITY_STATUS_MAP = new Map<boolean, IStatus>([
  [true, VISIBILITY_STATUS[0]],
  [false, VISIBILITY_STATUS[1]],
]);
