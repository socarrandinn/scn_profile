import { IStatus } from '@dfl/mui-react-common';
import { t } from 'i18next';
import { GREEN, RED } from 'settings/theme';

export const TRACKING_OPTIONS: IStatus[] = [
  { _id: 'true', title: t('orderStatus:fields.tracking'), color: GREEN },
  { _id: 'false', title: t('orderStatus:fields.noTracking'), color: RED },
];

export const TRACKING_OPTIONS_MAP = new Map<boolean, IStatus>([
  [true, TRACKING_OPTIONS[0]],
  [false, TRACKING_OPTIONS[1]],
]);
