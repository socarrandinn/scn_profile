import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import { useMemo } from 'react';

export const useCheckOrderStatus = (type?: ORDER_STATUS_TYPE_ENUM) => {
  const isValidated = useMemo(() => type === ORDER_STATUS_TYPE_ENUM.VALIDATED, [type]);
  const isPaid = useMemo(() => type === ORDER_STATUS_TYPE_ENUM.PAID, [type]);

  return {
    isValidated,
    isPaid,
  };
};
