import { IAddress, ICommonDomain } from 'modules/common/interfaces';
import { IEmployeeGeneralInfo } from 'modules/store/employee/common/interfaces/general-info';
import { IEmployeeContactInfo } from 'modules/store/employee/common/interfaces/contact-info';
import { HiringInfo } from 'modules/store/employee/common/interfaces/hiring-info';
import { CurrentJobInformation, JobInformation } from 'modules/store/employee/common/interfaces/job-information';
import { ICompensation } from 'modules/store/employee/common/interfaces/compensation';
import { ISocialMediaInfo } from 'modules/store/employee/common/interfaces/social-media-info';
// import { ICategory } from 'modules/store/employee/settings/category/interfaces';

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

  category?: any | null;
  // category?: ICategory | null;

  jobInformation: CurrentJobInformation;

  social: ISocialMediaInfo;
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
