import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export interface IUser {
  _id?: string;
  email: string;
  fullName?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  avatarOriginal?: string;
  phone: string;
  country?: string;
  createdAt?: Date;
  roles?: IRoleSetting[];
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
