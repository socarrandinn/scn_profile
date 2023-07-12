import { IEmployee } from 'modules/store/employee/common/interfaces';

export interface ITeam {
  _id?: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  manager: IEmployee | string | null;
  tags?: string[];
  createdAt?: Date;
  active?: boolean;
}
