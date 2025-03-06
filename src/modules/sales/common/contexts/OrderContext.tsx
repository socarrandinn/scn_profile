import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { ORDER_TYPE_ENUM } from '../constants/order.enum';
import { useFinOneOrderByType } from '../hooks/useFinOneOrderByType';
import { IOrder } from '../interfaces/IOrder';
// Data value of the provider context
type OrderContextValue = {
  order?: IOrder;
  orderId?: string;
  isLoading?: boolean;
  error?: any;
  orderType?: ORDER_TYPE_ENUM;
};
// default value of the context
const defaultValue: OrderContextValue = {};

// create context
const OrderContext = createContext<OrderContextValue>(defaultValue);

// Proptypes of Provider component
type OrderContextProps = ChildrenProps & {
  children: any;
  orderId: string;
  orderType: ORDER_TYPE_ENUM;
};

/**
 * Provider component
 * */
const OrderProvider = ({ orderId, orderType, ...props }: OrderContextProps) => {
  const useFindOneOrder = useFinOneOrderByType(orderType);
  const { data: order, isLoading, error } = useFindOneOrder(orderId);

  return <OrderContext.Provider value={{ order, orderId, isLoading, error, orderType }} {...props} />;
};

// Default hook to retrieve context data
const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { OrderProvider, useOrderContext };
