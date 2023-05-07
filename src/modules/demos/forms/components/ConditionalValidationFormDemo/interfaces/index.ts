import { CIVIL_STATUS_ENUM } from '../utils';

export interface IData {
  name: string;
  civilStatus: CIVIL_STATUS_ENUM;
  otherCivilStatusDescription: string;
}

export interface IDataResult {
  name: string;
  civilStatus: CIVIL_STATUS_ENUM;
  otherCivilStatusDescription: string;
  siteUrl?: string;
}
