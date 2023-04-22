import { IEmployeeContactInfo, IEmployeeCreate, IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces';
import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';
import { addressInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { HiringInfo } from 'modules/rrhh/employee/interfaces/hiring-info';

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
  recommended: false,
  recommendedBy: '',
  date: new Date(),
};

export const employeeInitValue: IEmployeeCreate = {
  general: generalEmployeeInitValue,

  address: addressInitValue,

  contacts: contactsEmployeeInitValue,
  hiring: hiringInfoInitValue,

  hasUser: true,

  metadata: {},
};
