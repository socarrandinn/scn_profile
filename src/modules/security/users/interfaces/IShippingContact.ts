import { Address } from 'interfaces/address';

export interface IShippingContact {
  _id?: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  identityNumber?: string;
  email: string;
  phone: string;
  address: Address;
  createdAt?: Date;
  save?: boolean;
  needCi?: boolean;
  type: string;
  owner: string;
  place?: {
    location: Address;
  };
  verification?: {
    isValid?: boolean;
    by?: string;
    date?: string;
  };
}
