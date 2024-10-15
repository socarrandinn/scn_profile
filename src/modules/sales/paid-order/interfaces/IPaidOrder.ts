export interface IPaidOrder {
  _id?: string
  code: string;
  shipping: IShipping;
  shippingPackage: IShippingPackage;
  billing: IBilling;
  status: IStatus;
}

export interface IStatus {
  title: string;
  color: string;
  isSystem: boolean;
  type: string;
  description: string;
  order: number;
  tracking: boolean;
  allowTo: string[];
  notification: INotification;
}

export interface INotification {
  enabled: boolean;
  audience: string[];
}

export interface IBilling {
  gateway: string;
  billingClient: IBillingClient;
  hasPayment: boolean;
  paymentDate: string;
  hasChargeBack: boolean;
  chargeBackDate: string;
}

export interface IBillingClient {
  firstName: string;
  lastName: string;
  identityNumber: string;
  cardNumberMask: string;
}

export interface IShippingPackage {
  weight: number;
  volume: number;
  needsRefrigeration: boolean;
  isFragile: boolean;
}

export interface IShipping {
  person: IPerson;
  alternativePerson: IAlternativePerson;
  address: Address;
  shippingType: string;
  deliveryTimeType: string;
}

export interface Address {
  street: string;
  number: string;
  address: string;
  state: string;
  city: string;
  country: string;
  zipCode: string;
  location: Location;
  note: string;
}

export interface Location {
  type: string;
  coordinates: string[];
}

export interface IAlternativePerson {
  firstName: string;
  lastName: string;
  identityNumber: string;
  contactId: string;
  email: string;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  identityNumber: string;
}
