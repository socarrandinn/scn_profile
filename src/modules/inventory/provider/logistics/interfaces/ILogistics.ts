import { IAddress, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { IRole } from 'modules/security/roles/interfaces';

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
  address: IAddress;
  createdAt?: Date;
  // keywords: string[]
  tags: IProductTags[] | null
  otherTags: IProductTags[] | null
  selectedTag?: IProductTags[]
}

export interface IBulkUpdateHandlingCost {
  handlingCost: number;
  logistics: ILogistics[];
}

export interface ILogisticUser {
  users: string[];
  role: IRole;
  warehouse?: IWarehouse;
}
