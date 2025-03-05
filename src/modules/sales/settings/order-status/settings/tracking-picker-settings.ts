import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const TRACKING_OPTIONS = (t: any): IStatus[] => [
  { _id: 'true', title: t('orderStatus:fields.tracking'), color: GREEN },
  { _id: 'false', title: t('orderStatus:fields.noTracking'), color: RED },
];

export const TRACKING_OPTIONS_MAP = (t: any) =>
  new Map<boolean, IStatus>([
    [true, TRACKING_OPTIONS(t)[0]],
    [false, TRACKING_OPTIONS(t)[1]],
  ]);
