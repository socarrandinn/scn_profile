import { IAddressWithLocation, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';

export interface IProducts {
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
  commission: number;
  address: IAddressWithLocation;
  createdAt?: Date;
}
