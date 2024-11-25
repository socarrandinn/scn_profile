import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const STATE: IStatus[] = [
  { _id: 'true', title: ('common:active'), color: GREEN },
  { _id: 'false', title: ('common:inactive'), color: RED },
];

export const STATE_MAP = new Map<boolean, IStatus>([
  [true, STATE[0]],
  [false, STATE[1]],
]);
