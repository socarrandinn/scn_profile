import { ROLE_TYPE_ENUM } from '../constants/role-provider.enum';

export interface IRole {
  _id?: string;
  role?: string;
  name: string;
  icon: string;
  description: string;
  permissions?: string[];
  createdAt?: Date;
  type?: ROLE_TYPE_ENUM;
  isAdmin?: boolean;
  isSystemRole?: boolean;
  isSpaceOwner?: boolean;
  provider?: string | null;
}
export interface IRoleProvider extends Omit<IRole, 'role'> {
  provider: string;
}

export type Permission = string;

export interface IModule {
  label: string;
  permissions: Permission[];
}
