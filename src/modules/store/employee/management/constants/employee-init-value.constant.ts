import {
  IEmployeeContactInfo,
  IEmployeeCreate,
  IEmployeeGeneralInfo,
  IEmployeeUpdate,
  ISocialMediaInfo,
} from 'modules/store/employee/common/interfaces';
import { GenderEnum } from 'modules/store/employee/management/constants/gender.enum';
import { CivilStatusEnum } from 'modules/store/employee/management/constants/civil-status.enum';
import { addressInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { HiringInfo } from 'modules/store/employee/common/interfaces/hiring-info';
import { JobInformation } from 'modules/store/employee/common/interfaces/job-information';
import { Engagement } from 'modules/store/employee/management/constants/engagement.enum';
import { RecommendedEnum } from 'modules/store/employee/management/constants/recomended.enum';
import { ICompensation } from 'modules/store/employee/common/interfaces/compensation';
import { CompensationType, Frequency, PaymentType } from 'modules/store/employee/management/constants/compensation';

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
  value: 1,
  frequency: Frequency.MONTHLY,
  dateActivated: new Date(),
  active: true,
};

export const jobInformationInitValue: JobInformation = {
  notes: '',
  location: null,
  engagement: Engagement.FULL_TIME,
  reported: null,
  position: null,
  team: null,
  active: true,
};

export const socialInitValue: ISocialMediaInfo = {
  facebook: '',
  instagram: '',
  linkendin: '',
  twitter: '',
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

  category: null,

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
