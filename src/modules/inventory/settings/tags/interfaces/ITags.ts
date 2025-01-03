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

export enum TAG_PROVIDER_ENUM {
  PRODUCT = 'PRODUCT',
  LOGISTIC = 'LOGISTIC',
  CARRIER = 'CARRIER',
}
