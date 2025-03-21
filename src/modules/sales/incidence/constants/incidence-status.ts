import { IStatus } from '@dfl/mui-react-common';
import { BLUE, GREEN, RED, WARNING } from 'settings/theme';

export enum INCIDENCE_STATUS_ENUM {
  OPEN = 'OPEN',
  IN_REVIEW = 'IN_REVIEW',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

export const INCIDENCE_STATUS: IStatus[] = [
  { _id: INCIDENCE_STATUS_ENUM.OPEN, title: 'status.OPEN', color: WARNING },
  { _id: INCIDENCE_STATUS_ENUM.IN_REVIEW, title: 'status.IN_REVIEW', color: BLUE },
  { _id: INCIDENCE_STATUS_ENUM.RESOLVED, title: 'status.RESOLVED', color: GREEN },
  { _id: INCIDENCE_STATUS_ENUM.CLOSED, title: 'status.CLOSED', color: RED },
];

export const INCIDENCE_STATUS_MAP = new Map<string, IStatus>([
  [INCIDENCE_STATUS_ENUM.OPEN, INCIDENCE_STATUS[0]],
  [INCIDENCE_STATUS_ENUM.IN_REVIEW, INCIDENCE_STATUS[1]],
  [INCIDENCE_STATUS_ENUM.RESOLVED, INCIDENCE_STATUS[2]],
  [INCIDENCE_STATUS_ENUM.CLOSED, INCIDENCE_STATUS[3]],
]);
