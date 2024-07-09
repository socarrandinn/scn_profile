export interface ITags {
  _id?: string;
  name: string;
  isRequiredForProducts: boolean;
  isRequiredForProviders?: TAG_PROVIDER_ENUM[];
  type: TAG_TYPE_ENUM;
  createdAt?: Date;
  updatedAt?: Date;
  values: string[];
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
  ARRAY = 'ARRAY',
  // ARRAY_CHECKBOX = 'ARRAY_CHECKBOX',
}

export enum TAG_PROVIDER_ENUM {
  PRODUCT = 'PRODUCT',
  LOGISTIC = 'LOGISTIC',
  CARRIER = 'CARRIER',
}
