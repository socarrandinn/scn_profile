import { IAddressWithLocation, IImageMedia } from 'modules/common/interfaces';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';

export interface IProvider {
  _id?: string;
  name: string;
  code: string;
  active: boolean;
  avatar: IImageMedia;
  contacts: IContactInfo;
  address: IAddressWithLocation;
  commission: number;
  type: string;
}
