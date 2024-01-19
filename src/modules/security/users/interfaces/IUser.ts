import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { IImageMedia } from 'modules/common/interfaces';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

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
}

export type IOnBordingComplete = {
  password: string;
  onboardingCompleted: boolean;
};

export type IChangePasswordRequire = {
  lastPassword: string;
  password: string;
};
