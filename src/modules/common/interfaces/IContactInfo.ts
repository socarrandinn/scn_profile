import { IContactEmail, IContactPhone } from 'modules/common/interfaces/index';

export interface IContactInfo {
  phones: IContactPhone[];
  emails: IContactEmail[];
  mainPhone?: string;
  mainEmail?: string;
}
