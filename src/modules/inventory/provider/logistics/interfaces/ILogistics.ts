import { IAddressWithLocation, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';

export interface ILogistics {
  _id?: string;
  name: string;
  code: string;
  active?: boolean;
  avatar?: IImageMedia;
  commission: number;
  handlingCost: number;
  contacts: {
    mainPhone?: string;
    mainEmail?: string;
    phones: IContactPhone[];
    emails: IContactEmail[];
  };
  address: IAddressWithLocation;
  createdAt?: Date;
}
