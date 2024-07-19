export interface IRole {
  _id?: string;
  role?: string;
  name: string;
  icon: string;
  description: string;
  permissions?: string[];
  createdAt?: Date;
  isAdmin?: boolean;
  isSystemRole?: boolean;
  isSpaceOwner?: boolean;
  provider?: string
}
export interface IRoleProvider extends Omit<IRole, 'role'> {
  type?: string;
}
