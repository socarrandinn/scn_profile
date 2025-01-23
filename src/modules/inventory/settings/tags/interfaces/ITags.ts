export interface ITags {
  _id?: string;
  name: string;
  values: string[];
  isMultiValue: boolean;
  type: TAG_TYPE_ENUM;
  rules: IRules;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRules {
  product: {
    required: boolean;
  };
  supplier: {
    required: boolean;
  };
  logistic: {
    required: boolean;
  };
}

export interface ISummaryTags extends Pick<ITags, '_id' | 'name' | 'type' | 'isMultiValue'> {
  value: any;
  ruleRequired?: boolean;
  tag: string;
}

export type ITagsMap = Record<string, ISummaryTags>;

export enum TAG_NAMES {
  PRODUCT = 'product',
  SUPPLIER = 'supplier',
  LOGISTIC = 'logistic',
}

export interface IProductTags {
  product: ISummaryTags[];
  supplier?: ISummaryTags[];
}

export enum TAG_TYPE_ENUM {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  ARRAY = 'ARRAY',
  // ARRAY_CHECKBOX = 'ARRAY_CHECKBOX',
}

export const TAGS_DEFAULT_VALUE = {
  [TAG_TYPE_ENUM.STRING]: '',
  [TAG_TYPE_ENUM.NUMBER]: 0,
  [TAG_TYPE_ENUM.BOOLEAN]: false,
  [TAG_TYPE_ENUM.DATE]: new Date(),
  [TAG_TYPE_ENUM.ARRAY]: [],
};

export enum TAG_PROVIDER_ENUM {
  PRODUCT = 'PRODUCT',
  LOGISTIC = 'LOGISTIC',
  CARRIER = 'CARRIER',
}
