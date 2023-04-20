import { IContactEmail, IContactPhone } from 'modules/common/interfaces';

export interface IEmployeeContactInfo {
  phones: IContactPhone[];
  emails: IContactEmail[];
}
