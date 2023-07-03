import { IAddressWithLocation, IContactEmail, IContactPhone } from 'modules/common/interfaces';

export interface IStore {
  _id?: string;
  name: string;
  description?: string;
  visible: boolean;
  contacts: {
    mainPhone: string;
    mainEmail: string;
    phones: IContactPhone[];
    emails: IContactEmail[];
  };
  logistic: string | null;
  address: IAddressWithLocation;
}
