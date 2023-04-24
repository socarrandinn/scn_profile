import { IEmployee, IEmployeeContactInfo, IEmployeeCreate, IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces';
import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';
import { addressInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { HiringInfo } from 'modules/rrhh/employee/interfaces/hiring-info';
import { JobInformation } from 'modules/rrhh/employee/interfaces/job-information';
import { Engagement } from 'modules/rrhh/employee/constants/engagement.enum';
import { RecommendedEnum } from 'modules/rrhh/employee/constants/recomended.enum';

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
export const jobInformationInitValue: JobInformation = {
  notes: '',
  location: null,
  engagement: Engagement.FULL_TIME,
  reported: null,
  position: null,
};

export const employeeInitValue: IEmployeeCreate = {
  general: generalEmployeeInitValue,

  address: addressInitValue,

  contacts: contactsEmployeeInitValue,

  hiring: hiringInfoInitValue,

  jobInformation: jobInformationInitValue,

  hasUser: true,

  metadata: {},
};

export const employeeEditInitValue: IEmployee = {
  general: generalEmployeeInitValue,

  address: addressInitValue,

  contacts: contactsEmployeeInitValue,

  hiring: hiringInfoInitValue,

  jobInformation: [jobInformationInitValue],

  hasUser: true,

  metadata: {},

  _id: '',
  phone: '',
  email: '',
};
