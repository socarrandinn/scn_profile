import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const CAUSE_INCIDENCE_STATUS: IStatus[] = [
  { _id: 'true', title: 'isPublic.public', color: GREEN },
  { _id: 'false', title: 'isPublic.private', color: RED },
];

export const CAUSE_INCIDENCE_STATUS_MAP = new Map<boolean, IStatus>([
  [true, CAUSE_INCIDENCE_STATUS[0]],
  [false, CAUSE_INCIDENCE_STATUS[1]],
]);
