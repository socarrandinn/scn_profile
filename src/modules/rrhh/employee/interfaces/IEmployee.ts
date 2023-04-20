import { IAddress, ICommonDomain } from 'modules/common/interfaces';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces/general-info';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/interfaces/contact-info';

export interface IEmployee extends ICommonDomain {
  general: IEmployeeGeneralInfo;

  address: IAddress;

  contacts: IEmployeeContactInfo;

  hasUser: boolean;

  metadata: object;
}
