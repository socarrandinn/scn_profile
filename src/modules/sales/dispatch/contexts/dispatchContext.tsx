import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOneDispatch } from '../hooks/useFindOneDispatch';
import { IDispatch } from '../interfaces';
// Data value of the provider context
type DispatchContextValue = {
  value?: any;
  dispatch?: IDispatch;
  error?: any;
  isLoading?: boolean;
  dispatchId?: string;
};
// default value of the context
const defaultValue: DispatchContextValue = {};

// create context
const DispatchContext = createContext<DispatchContextValue>(defaultValue);

// Proptypes of Provider component
type DispatchContextProps = ChildrenProps & {
  children: any;
  dispatchId: string;
};

/**
 * Provider component
 * */
const DispatchProvider = ({ dispatchId, ...props }: DispatchContextProps) => {
  const { data: dispatch, error, isLoading } = useFindOneDispatch(dispatchId);
  return <DispatchContext.Provider value={{ dispatch, error, isLoading, dispatchId }} {...props} />;
};

// Default hook to retrieve context data
const useDispatchDetail = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { DispatchProvider, useDispatchDetail };
