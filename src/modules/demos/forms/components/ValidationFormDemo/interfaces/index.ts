import { GENDER_ENUM } from '../utils';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  birthday: Date;
  accountNumber: string;
  password: string;
  confirmPassword: string;
  siteUrl?: string;
}

export interface IUserResult {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  birthday: Date;
  accountNumber: string;
  siteUrl?: string;
}
