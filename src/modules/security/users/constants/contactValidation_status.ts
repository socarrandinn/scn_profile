import { t } from 'i18next';
import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const CONTACT_VALIDATION_STATUS: IStatus[] = [
  { _id: 'true', title: t(`users:shipping.verification.${'valid'}`), color: GREEN }, // todo use type: success // SelectPicker issue
  { _id: 'false', title: t(`users:shipping.verification.${'invalid'}`), color: RED }, // todo use type: warning
];

// Access to the option value in O(1)
export const CONTACT_VALIDATION_STATUS_MAP = new Map<boolean, IStatus>([
  [true, CONTACT_VALIDATION_STATUS[0]], // take in maid that the order can't change!!
  [false, CONTACT_VALIDATION_STATUS[1]], // take in maid that the order can't change!!
]);
