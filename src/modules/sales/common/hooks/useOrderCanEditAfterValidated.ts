import { useMemo } from 'react';
import { STATUS_ORDER_FLOW } from '../constants/order-status.flow';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';

export const useOrderCanEditAfterValidated = (statusType: ORDER_STATUS_TYPE_ENUM | undefined) => {
  return useMemo(() => {
    if (!statusType || statusType === ORDER_STATUS_TYPE_ENUM.VALIDATED) return false;
    return !STATUS_ORDER_FLOW[statusType]?.[ORDER_STATUS_TYPE_ENUM.VALIDATED];
  }, [statusType]);
};
