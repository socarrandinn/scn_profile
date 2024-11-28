export interface ITags {
  _id?: string;
  name: string;
  values: string[];
  isMultiValue: boolean;
  type: TAG_TYPE_ENUM;

  rules: {
    product: {
      required: boolean;
    };
    supplier: {
      required: boolean;
    };
    logistic: {
      required: boolean;
    };
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISummaryTags extends Pick<ITags, '_id' | 'name' | 'type'> {
  value: any
}

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
