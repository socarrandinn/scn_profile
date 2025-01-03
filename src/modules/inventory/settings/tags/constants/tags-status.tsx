import { TAG_TYPE_ENUM } from '../interfaces';

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
