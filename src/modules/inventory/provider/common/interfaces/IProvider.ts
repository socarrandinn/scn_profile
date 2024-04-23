import { IAddress, IImageMedia } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';

export interface IProvider {
  _id?: string;
  name: string;
  code: string;
  active: boolean;
  avatar: IImageMedia;
  contacts: IContactInfo;
  address: IAddress;
  commission: number;
  type: string;
}

export enum ProviderType {
  PRODUCT = 'PRODUCT',
  LOGISTIC = 'LOGISTIC',
}
