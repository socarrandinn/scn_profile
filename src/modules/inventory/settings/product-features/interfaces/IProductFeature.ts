export interface IProductFeature {
  _id?: string;
  name: string;
  type: PRODUCT_FEATURE_TYPE_ENUM;
  values: string[];
  isMultiValue: boolean
}

export enum PRODUCT_FEATURE_TYPE_ENUM {
  STRING = 'STRING',
  COLOR = 'COLOR',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  ARRAY = 'ARRAY',
  DATE = 'DATE',
}
