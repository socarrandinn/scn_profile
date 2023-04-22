import { IAddress, ICommonDomain } from 'modules/common/interfaces';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces/general-info';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/interfaces/contact-info';
import { HiringInfo } from 'modules/rrhh/employee/interfaces/hiring-info';

export interface IEmployee extends ICommonDomain {
  general: IEmployeeGeneralInfo;

  address: IAddress;

  contacts: IEmployeeContactInfo;
  hiring: HiringInfo;

  hasUser: boolean;

  metadata: object;
}

export interface IEmployeeCreate extends Omit<IEmployee, '_id'> {}
