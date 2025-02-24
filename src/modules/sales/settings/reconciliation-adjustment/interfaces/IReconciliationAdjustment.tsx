import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

export interface IReconciliationAdjustment {
  _id?: string;
  causeAdjustment: string | null;
  provider: string | null
  totalAmount: number
  providerType: PROVIDER_TYPE_ENUM;
  description: string;
  conciliation?: string;
}
