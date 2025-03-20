import { CURRENCY_TYPE_ENUM } from '../../payment-settings/constants';

export interface IBank {
  _id?: string;
  name: string;
  description: string;
  alias: string;
  currency: CURRENCY_TYPE_ENUM;
  enabled: boolean;
  address?: { country: string; state: string; city: string };
  ibanNumber: string;
  swiftBIC: string;
  branch: string;
  branchHolder: string;
}
