export interface ICausesIncidence {
  _id?: string;
  type: string;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  shopVisibility: boolean;
}

export enum CAUSES_INCIDENCE_TYPE_ENUM {
  NOT_AVIABLE = 'NOT_AVIABLE',
  MISSING_PRODUCT = 'MISSING_PRODUCT',
  DELIVERY_DELAY = 'DELIVERY_DELAY',
  DEFECTIVE_PRODUCT = 'DEFECTIVE_PRODUCT',
  WAREHOUSE_HANDLING_PROBLEM = 'WAREHOUSE_HANDLING_PROBLEM',
  OTHER = 'OTHER',
  CUSTOMER_CANCELING = 'CUSTOMER_CANCELING',
  INCOMPLETE_ORDER = 'INCOMPLETE_ORDER',
  PRODUCT_CHANGE_DELIVERY = 'PRODUCT_CHANGE_DELIVERY',
}
