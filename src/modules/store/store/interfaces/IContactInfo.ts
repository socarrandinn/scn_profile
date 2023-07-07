import { IContactEmail, IContactPhone } from 'modules/common/interfaces';

export interface IContactInfo {
  phones: IContactPhone[];
  emails: IContactEmail[];
  mainPhone?: string;
  mainEmail?: string;
}
