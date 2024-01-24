import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';

export const CATEGORY_VISIBILITY: IStatus[] = [
  { _id: 'true', title: 'visibility.visible', color: GREEN },
  { _id: 'false', title: 'visibility.hide', color: RED },
];

export const CATEGORY_VISIBILITY_MAP = new Map<boolean, IStatus>([
  [true, CATEGORY_VISIBILITY[0]],
  [false, CATEGORY_VISIBILITY[1]],
]);
