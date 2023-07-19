import { IStatus } from '@dfl/mui-react-common';
import { t } from 'i18next';
import { GREEN, RED } from 'settings/theme';

export const MANUFACTURE_STATE: IStatus[] = [
  { _id: 'true', title: t('manufacture:Active'), color: GREEN },
  { _id: 'false', title: t('manufacture:INACTIVE'), color: RED },
];

export const MANUFACTURE_STATE_MAP = new Map<boolean, IStatus>([
  [true, MANUFACTURE_STATE[0]],
  [false, MANUFACTURE_STATE[1]],
]);
