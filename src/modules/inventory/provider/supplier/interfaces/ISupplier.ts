import { IAddressWithLocation, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';
import { IStore } from 'modules/inventory/store/interfaces';
import { IRole } from 'modules/security/roles/interfaces';
import { IUser } from 'modules/security/users/interfaces/IUser';

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
  users?: IUser[];
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

export interface ISupplierUser {
  users: IUser[];
  role: IRole;
  store: IStore;
}
