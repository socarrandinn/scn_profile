import { IUser } from './IUser';

export enum FEE_TYPES_ENUM {
  PERCENTAGE_SALES_TYPE = 'PERCENTAGE_SALES_TYPE',
  FIXED_QUOTE_TYPE = 'FIXED_QUOTE_TYPE',
  FREE_TYPE = 'FREE_TYPE',
}

export enum TIME_INTERVAL_ENUM {
  MONTHLY_INTERVAL_TYPE = 'MONTHLY_INTERVAL_TYPE',
  QUARTERLY_INTERVAL_TYPE = 'QUARTERLY_INTERVAL_TYPE',
  ANNUAL_INTERVAL_TYPE = 'ANNUAL_INTERVAL_TYPE',
}

export interface ISpace {
  id?: string;
  _id?: string;
  name: string;
  url: string;
  logo: string;
  owner: IOwner;
  private: boolean;
  createdAt?: Date;
  feeConfiguration: IHistoryContract;
  summary: ISpaceSummary;
  identifier: string;
  currency: string;
}

export interface IOwner {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  fullName: string;
  avatar?: string;
  checkOtherEmail?: boolean;
  otherEmail?: string;
}

export interface IHistoryContract extends IFeeConfiguration {
  _id?: string;
  active: boolean;
  space: string;
  metadata: { owner: IOwner };
}

export interface ISpaceSummary {
  users: number;
}

export interface IFeeConfiguration {
  fee: number;
  type: FEE_TYPES_ENUM | string;
  interval:
  | TIME_INTERVAL_ENUM.ANNUAL_INTERVAL_TYPE
  | TIME_INTERVAL_ENUM.MONTHLY_INTERVAL_TYPE
  | TIME_INTERVAL_ENUM.QUARTERLY_INTERVAL_TYPE;
  initialDate?: string;
  createdAt?: string;
  approvedBy?: IUser;
  approvedAt?: string;
}
