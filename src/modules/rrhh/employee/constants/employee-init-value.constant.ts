import {
  IEmployeeContactInfo,
  IEmployeeCreate,
  IEmployeeGeneralInfo,
  IEmployeeUpdate, ISocialMediaInfo
} from 'modules/rrhh/employee/interfaces';
import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';
import { addressInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { HiringInfo } from 'modules/rrhh/employee/interfaces/hiring-info';
import { JobInformation } from 'modules/rrhh/employee/interfaces/job-information';
import { Engagement } from 'modules/rrhh/employee/constants/engagement.enum';
import { RecommendedEnum } from 'modules/rrhh/employee/constants/recomended.enum';
import { ICompensation } from 'modules/rrhh/employee/interfaces/compensation';
import { CompensationType, Frequency, PaymentType } from 'modules/rrhh/employee/constants/compensation';

export const generalEmployeeInitValue: IEmployeeGeneralInfo = {
  firstName: '',

  lastName: '',

  birthday: new Date(),

  ci: '',

  gender: GenderEnum.male,

  diseases: [],

  allergies: [],

  notes: '',

  civilStatus: CivilStatusEnum.single,

  partner: '',
};

export const contactsEmployeeInitValue: IEmployeeContactInfo = {
  phones: [phoneInitValue],
  emails: [emailInitValue],
};

export const hiringInfoInitValue: HiringInfo = {
  active: true,
  recommended: RecommendedEnum.unrecommended,
  recommendedBy: null,
  date: new Date(),
};
export const compensationInitValue: ICompensation = {
  type: CompensationType.SALARY,
  paymentType: PaymentType.ON_DEMAND,
  value: 0,
  frequency: Frequency.MONTHLY,
  dateActivated: new Date(),
  active: true
};

export const jobInformationInitValue: JobInformation = {
  notes: '',
  location: null,
  engagement: Engagement.FULL_TIME,
  reported: null,
  position: null,
  active: true,
};

export const socialInitValue: ISocialMediaInfo = {
  facebook: '',
  instagram: '',
  linkendin: '',
  twitter: ''
};

export const employeeInitValue: IEmployeeCreate = {
  general: generalEmployeeInitValue,

  address: addressInitValue,

  contacts: contactsEmployeeInitValue,

  hiring: hiringInfoInitValue,

  compensation: compensationInitValue,

  jobInformation: jobInformationInitValue,

  social: socialInitValue,

  hasUser: true,

  metadata: {},
};

export const employeeEditInitValue: IEmployeeUpdate = {
  general: generalEmployeeInitValue,

  address: addressInitValue,

  contacts: contactsEmployeeInitValue,

  hiring: hiringInfoInitValue,

  compensation: compensationInitValue,

  jobInformation: jobInformationInitValue,

  social: socialInitValue,

  hasUser: true,

  metadata: {},

  _id: '',
};
