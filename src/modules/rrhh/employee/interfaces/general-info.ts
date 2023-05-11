import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';
import { IImageMedia } from 'modules/common/interfaces';

export interface IEmployeeGeneralInfo {
  firstName: string;

  lastName: string;

  birthday: Date;

  avatar?: IImageMedia;

  ci: string;

  gender: GenderEnum;

  diseases: string[];

  allergies: string[];

  notes: string;

  civilStatus: CivilStatusEnum;

  partner?: string;
}
