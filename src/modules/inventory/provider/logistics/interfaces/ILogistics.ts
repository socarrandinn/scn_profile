import { IAddress, IContactEmail, IContactPhone, IImageMedia } from 'modules/common/interfaces';
import { IStore } from 'modules/inventory/store/interfaces';
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
}

export interface IBulkUpdateHandlingCost {
  handlingCost: number;
  logistics: ILogistics[];
}

export interface ILogisticUser {
  users: string[];
  role: IRole;
  store?: IStore;
}
