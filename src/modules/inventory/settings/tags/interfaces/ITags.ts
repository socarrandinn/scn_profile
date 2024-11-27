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

export interface IProductTags {
  _id: string;
  type?: TAG_TYPE_ENUM;
  value: any;
  name?: string;
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
