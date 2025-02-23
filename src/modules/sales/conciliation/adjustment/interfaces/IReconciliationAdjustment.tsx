import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

export interface IReconciliationAdjustment {
  _id?: string;
  causeAdjustment: string;
  totalAmount: 0;
  providerType: PROVIDER_TYPE_ENUM;
  provider: string;
  description: string;
  conciliation: string;
}
