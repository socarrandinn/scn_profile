import { IEmployeeContactInfo, IEmployeeCreate, IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces';
import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';
import { addressInitValue } from 'modules/common/constants';

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
  phones: [],
  emails: [],
};

export const employeeInitValue: IEmployeeCreate = {
  general: generalEmployeeInitValue,

  address: addressInitValue,

  contacts: contactsEmployeeInitValue,

  hasUser: true,

  metadata: {},
};
