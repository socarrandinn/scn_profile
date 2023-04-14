export interface IRole {
  _id?: string;
  name: string;
  icon: string;
  description: string;
  permissions?: string[];
  createdAt?: Date;
  isAdmin?: boolean;
  isSystemRole?: boolean;
  isSpaceOwner?: boolean;
}
