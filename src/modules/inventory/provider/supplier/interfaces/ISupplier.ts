import { IAddressWithLocation, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';

export interface ISupplier {
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

export interface ISupplierAddressList {
  label: string;
  value: string;
}
export interface ISupplierContact {
  label: string;
  value: string;
  principal: boolean;
}
