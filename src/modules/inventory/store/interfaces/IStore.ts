import { IAddressWithLocation } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';

export interface IStore {
  _id?: string;
  name: string;
  description?: string;
  visible: boolean;
  contacts: IContactInfo;
  logistic: any | null;
  address: IAddressWithLocation;
  locations: string[];
  time: number
}

export interface IStoreAddressList {
  label: string;
  value: string;
}
