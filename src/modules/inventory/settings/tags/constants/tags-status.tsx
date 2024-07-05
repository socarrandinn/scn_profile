import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const TAG_STATUS: IStatus[] = [
  { _id: 'true', title: 'required.true', color: GREEN },
  { _id: 'false', title: 'required.false', color: RED },
];

export const TAG_STATUS_MAP = new Map<boolean, IStatus>([
  [true, TAG_STATUS[0]],
  [false, TAG_STATUS[1]],
]);
