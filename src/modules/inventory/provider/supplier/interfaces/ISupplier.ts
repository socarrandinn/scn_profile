import { IAddress, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { IRole } from 'modules/security/roles/interfaces';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { PROVIDER_TYPE_ENUM } from '../../common/constants';

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
  type?: PROVIDER_TYPE_ENUM;

  // keywords: string[]
  tags: {
    supplier: ISummaryTags[] | null;
  };
  otherTags: ISummaryTags[] | null;
  selectedTag?: ISummaryTags[];
}

export interface ISupplierSummary {
  supplierId: string;
  name: string;
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
