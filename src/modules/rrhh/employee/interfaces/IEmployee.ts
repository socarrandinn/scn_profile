import { IAddress, ICommonDomain } from 'modules/common/interfaces';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces/general-info';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/interfaces/contact-info';
import { HiringInfo } from 'modules/rrhh/employee/interfaces/hiring-info';
import { JobInformation } from 'modules/rrhh/employee/interfaces/job-information';

export interface IEmployee extends ICommonDomain {
  email: string;
  phone: string;
  general: IEmployeeGeneralInfo;

  address: IAddress;

  contacts: IEmployeeContactInfo;

  hiring: HiringInfo;

  hasUser: boolean;

  metadata: object;

  jobInformation: JobInformation[];
}

export interface IEmployeeCreate extends Omit<IEmployee, '_id' | 'jobInformation' | 'email' | 'phone'> {
  jobInformation: JobInformation;
}

export interface IEmployeePersonalUpdate extends Omit<IEmployee, 'jobInformation' | 'email' | 'phone' | 'hiring'> {

}
