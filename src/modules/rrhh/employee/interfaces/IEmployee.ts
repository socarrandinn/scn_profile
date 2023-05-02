import { IAddress, ICommonDomain } from 'modules/common/interfaces';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces/general-info';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/interfaces/contact-info';
import { HiringInfo } from 'modules/rrhh/employee/interfaces/hiring-info';
import { JobInformation } from 'modules/rrhh/employee/interfaces/job-information';
import { ICompensation } from 'modules/rrhh/employee/interfaces/compensation';
import { ISocialMediaInfo } from 'modules/rrhh/employee/interfaces/social-media-info';

export interface IEmployee extends ICommonDomain {
  email: string;
  phone: string;
  general: IEmployeeGeneralInfo;

  address: IAddress;

  contacts: IEmployeeContactInfo;

  hiring: HiringInfo;

  hasUser: boolean;

  metadata: object;

  compensation: ICompensation[];

  jobInformation: JobInformation[];

  social: ISocialMediaInfo;

  avatar?: string;
  avatarOriginal?: string;
}

export interface IEmployeeCreate
  extends Omit<IEmployee, '_id' | 'compensation' | 'jobInformation' | 'email' | 'phone'> {
  jobInformation: JobInformation;
  compensation: ICompensation;
}

export interface IEmployeeUpdate extends Omit<IEmployee, 'jobInformation' | 'compensation' | 'email' | 'phone'> {
  jobInformation: JobInformation;
  compensation: ICompensation;
}

export interface IEmployeePersonalUpdate
  extends Omit<IEmployee, 'jobInformation' | 'compensation' | 'email' | 'phone' | 'hiring'> {}
