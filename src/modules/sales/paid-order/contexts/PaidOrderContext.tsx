import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOnePaidOrder } from '../hooks/useFindOnePaidOrder';
import { IPaidOrder } from '../interfaces';
// Data value of the provider context
type PaidOrderContextValue = {
  order?: IPaidOrder;
  isLoading?: boolean;
  error?: any;
};
// default value of the context
const defaultValue: PaidOrderContextValue = {};

// create context
const PaidOrderContext = createContext<PaidOrderContextValue>(defaultValue);

// Proptypes of Provider component
type PaidOrderContextProps = ChildrenProps & {
  children: any;
  paidOrderId: string;
};

/**
 * Provider component
 * */
const PaidOrderProvider = ({ paidOrderId, ...props }: PaidOrderContextProps) => {
  const { data, isLoading, error } = useFindOnePaidOrder(paidOrderId);

  return <PaidOrderContext.Provider value={{ order: data, isLoading, error }} {...props} />;
};

// Default hook to retrieve context data
const usePaidOrderContext = () => {
  const context = useContext(PaidOrderContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { PaidOrderProvider, usePaidOrderContext };
