import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { IImageMedia } from 'modules/common/interfaces';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

export interface IUser {
  _id?: string;
  email: string;
  fullName?: string;
  firstName: string;
  lastName: string;
  avatar?: IImageMedia;
  phone: string;
  country?: string;
  createdAt?: Date;
  roles?: IRoleSetting[];
  supplier?: ISupplier;
  security?: {
    roles?: IRoleSetting[];
    lock?: boolean;
    verified?: boolean;
    password?: string;
    lastPassword?: string;
  };

  onboardingCompleted?: boolean;

  // USER PROVIDER
  userType?: USER_TYPE;
  type?: ROLE_PROVIDER_TYPE_ENUM | null;
  warehouse?: string | null;
}

export type IOnBordingComplete = {
  password: string;
  onboardingCompleted: boolean;
};

export type IUserInvitation = {
  email: string;
  roles: string[];
};

export type IChangePasswordRequire = {
  lastPassword: string;
  password: string;
};

export enum USER_TYPE {
  SYSTEM = 'SYSTEM',
  PROVIDER = 'PROVIDER',
}
