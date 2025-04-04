import { IStatus } from '@dfl/mui-react-common';
import { BLUE, WARNING } from 'settings/theme';

export enum PAGE_STATUS_ENUM {
  PUBLISH = 'PUBLISH',
  DRAFT = 'DRAFT',
}

export const PAGE_STATUS: IStatus[] = [
  { _id: PAGE_STATUS_ENUM.PUBLISH, title: 'status.PUBLISH', color: BLUE },
  { _id: PAGE_STATUS_ENUM.DRAFT, title: 'status.DRAFT', color: WARNING },
];

export const PAGE_STATUS_MAP = new Map<string, IStatus>([
  [PAGE_STATUS_ENUM.PUBLISH, PAGE_STATUS[0]],
  [PAGE_STATUS_ENUM.DRAFT, PAGE_STATUS[1]],
]);
