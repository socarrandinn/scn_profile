import { IStatus } from '@dfl/mui-react-common';
import { GRAY, GREEN, RED } from 'settings/theme';

export const COLLECTION_STATUS: IStatus[] = [
  { _id: 'true', title: 'common:active', color: GREEN },
  { _id: 'false', title: 'common:inactive', color: RED },
];

export const COLLECTION_STATUS_MAP = new Map<boolean, IStatus>([
  [true, COLLECTION_STATUS[0]],
  [false, COLLECTION_STATUS[1]],
]);

export const COLLECTION_DYNAMIC: IStatus[] = [
  { _id: 'false', title: 'collection:fields.isDynamic:manual', color: GRAY },
  { _id: 'true', title: 'collection:fields.isDynamic:dynamic', color: GREEN },
];

export const COLLECTION_DYNAMIC_MAP = new Map<boolean, IStatus>([
  [false, COLLECTION_DYNAMIC[1]],
  [true, COLLECTION_DYNAMIC[0]],
]);
