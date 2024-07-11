import { IAddress } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';

export interface IStore {
  _id?: string;
  name: string;
  description?: string;
  visible: boolean;
  contacts: IContactInfo;
  logistic: any | null;
  address: IAddress;
  locations: StoreLocation[] | undefined;
}

export interface IStoreAddressList {
  label: string;
  value: string;
}

export interface StoreLocation {
  states: string[];
  country: string;
  state?: string;
  code?: string;
  region?: number;
  type?: string;
  acronym?: string;
}
