import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const COLLECTION_STATUS: IStatus[] = [
  { _id: 'true', title: 'common:active', color: GREEN },
  { _id: 'false', title: 'common:inactive', color: RED },
];

export const COLLECTION_STATUS_MAP = new Map<boolean, IStatus>([
  [true, COLLECTION_STATUS[0]],
  [false, COLLECTION_STATUS[1]],
]);
