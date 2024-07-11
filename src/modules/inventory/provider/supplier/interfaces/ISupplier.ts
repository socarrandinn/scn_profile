import { IAddress, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
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
  address: IAddress;
  createdAt?: Date;
  users?: IUser[];
  type?: string;

  // keywords: string[]
  tags: IProductTags[] | null;
  otherTags: IProductTags[] | null;
  selectedTag?: IProductTags[];
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
  users: string[];
  role: IRole;
}

export interface ICommissionUpdate {
  commission: number | '';
  suppliers: ISupplier[];
}
