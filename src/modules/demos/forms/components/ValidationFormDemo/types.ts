import { CIVIL_STATUS_ENUM, GENDER_ENUM } from './data';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  civilStatus: CIVIL_STATUS_ENUM,
  otherCivilStatusDescription: string,
  birthday: Date,
  accountNumber: string,
  password: string,
  confirmPassword: string,
  siteUrl?: string,
}

export interface IUserResult {
  firstName: string;
  lastName: string;
  email: string;
  gender: GENDER_ENUM;
  civilStatus: CIVIL_STATUS_ENUM,
  otherCivilStatusDescription: string,
  birthday: Date,
  accountNumber: string,
  siteUrl?: string,
}
