import { IEmployee } from 'modules/rrhh/employee/common/interfaces';

export interface INaoBirthday {
  name: string;
  avatar: string;
}

export interface IPropBrithday {
  items?: IEmployee[]
}
