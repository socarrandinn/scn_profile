export interface ICausesIncidence {
  _id?: string;
  name: string;
  description: string;
  isPublic: boolean;
  hasChildCauses?: boolean;
  parent: CAUSES_INCIDENCE_TYPE_ENUM | null;
  sendNotification: boolean;
  notification: INotification;
  requiresResponsible?: boolean;
  responsible?: string;
  requiresEvidence?: boolean;
}

export interface IAudience {
  target: INCIDENCE_AUDIENCE_TARGET[];
  template: string;
}
export interface INotification {
  enabled: boolean;
  audience: IAudience[];
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

export enum INCIDENCE_AUDIENCE_TARGET {
  CLIENT = 'CLIENT',
  RECEIVER = 'RECEIVER',
  SUPPORT = 'SUPPORT',
  LOGISTICS = 'LOGISTICS',
}
