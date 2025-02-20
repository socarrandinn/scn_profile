import { useFindOnePaidOrder } from 'modules/sales/paid-order/hooks/useFindOnePaidOrder';
import { ORDER_TYPE_ENUM } from '../constants/order.enum';
import { useFindOnePreOrder } from 'modules/sales/pre-order/hooks/useFindOnePreOrder';
import { useFindOneSubOrder } from 'modules/sales/sub-orders/hooks/useFindOneSubOrder';

export const useFinOneOrderByType = (type: ORDER_TYPE_ENUM) => {
  switch (type) {
    case ORDER_TYPE_ENUM.PAID_ORDER:
      return useFindOnePaidOrder;
    case ORDER_TYPE_ENUM.PRE_ORDER:
      return useFindOnePreOrder;
    case ORDER_TYPE_ENUM.SUB_ORDER:
      return useFindOneSubOrder;
    default:
      return useFindOnePaidOrder;
  }
};
