import { IAddress, ICommonDomain } from 'modules/common/interfaces';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/common/interfaces/general-info';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/common/interfaces/contact-info';
import { HiringInfo } from 'modules/rrhh/employee/common/interfaces/hiring-info';
import { CurrentJobInformation, JobInformation } from 'modules/rrhh/employee/common/interfaces/job-information';
import { ICompensation } from 'modules/rrhh/employee/common/interfaces/compensation';
import { ISocialMediaInfo } from 'modules/rrhh/employee/common/interfaces/social-media-info';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';

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

  category?: ICategory | null;

  jobInformation: CurrentJobInformation;

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
  extends Omit<IEmployee, 'jobInformation' | 'compensation' | 'email' | 'phone' | 'hiring'> {
}
