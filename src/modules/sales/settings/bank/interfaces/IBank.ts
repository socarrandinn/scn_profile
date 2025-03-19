import { IAddress } from 'modules/common/interfaces';
import { CURRENCY_TYPE_ENUM } from '../../payment-settings/constants';

export interface IBank {
  _id?: string;
  name: string;
  description: string;
  alias: string;
  currency: CURRENCY_TYPE_ENUM;
  enabled: boolean;
  address: IAddress;
  ibanNumber: string;
  swiftBIC: string;
  branch: string;
  branchHolder: string;
}
