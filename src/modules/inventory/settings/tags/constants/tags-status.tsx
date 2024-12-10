import { IStatus } from '@dfl/mui-react-common';
import { GREEN, RED } from 'settings/theme';
import { TAG_TYPE_ENUM } from '../interfaces';

export const TAG_STATUS: IStatus[] = [
  { _id: 'true', title: 'required.true', color: GREEN },
  { _id: 'false', title: 'required.false', color: RED },
];

export const TAG_STATUS_MAP = new Map<boolean, IStatus>([
  [true, TAG_STATUS[0]],
  [false, TAG_STATUS[1]],
]);

export enum TAG_RULES_ENUM {
  PRODUCT = 'product',
  SUPPLIER = 'supplier',
  LOGISTIC = 'logistic',
}

export const TAG_TYPES: Record<string, TAG_TYPE_ENUM> = {
  STRING: TAG_TYPE_ENUM.STRING,
  NUMBER: TAG_TYPE_ENUM.NUMBER,
  BOOLEAN: TAG_TYPE_ENUM.BOOLEAN,
  DATE: TAG_TYPE_ENUM.DATE,
  ARRAY: TAG_TYPE_ENUM.ARRAY,
};
