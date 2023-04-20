import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';

export interface IEmployeeGeneralInfo {
  firstName: string;

  lastName: string;

  birthday: Date;

  ci: string;

  gender: GenderEnum;

  diseases: string[];

  allergies: string[];

  notes: string;

  civilStatus: CivilStatusEnum;

  partner: string;
}
