import { IAddressWithLocation, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';

export interface ILogistics {
  _id?: string;
  name: string;
  code: string;
  active?: boolean;
  avatar?: IImageMedia;
  contacts: {
    mainPhone?: string;
    mainEmail?: string;
    phones: IContactPhone[];
    emails: IContactEmail[];
  };
  categories: string[];
  commission: number;
  handlingCost: number;
  address: IAddressWithLocation;
  createdAt?: Date;
}
