import { createContext, ReactNode, useContext, useEffect } from 'react';
import { DATES_OPTIONS_ENUM, Filter, TableProvider } from '@dfl/mui-admin-layout';
import { useSearchParamsChange } from '@dfl/react-security';
import { INTERVAL } from 'modules/inventory/provider/supplier/constants/supplier.enum';
import { useInterval } from 'components/libs/analytic/hooks/useInterval';

// Data value of the provider context
type ContextValue = {
  interval?: INTERVAL;
};
// default value of the context
const defaultValue: ContextValue = {};

// create context
const Context = createContext<ContextValue>(defaultValue);

// Proptypes of Provider component
type ReportSaleProviderProps = {
  id: string;
  intervalFilter?: string;
  filters?: Filter[];
  children: ReactNode | undefined;
};

/**
 * Provider component
 * */
const ReportSaleProvider = ({ intervalFilter, children, ...props }: ReportSaleProviderProps) => {
  const { value, update } = useSearchParamsChange(intervalFilter);
  const interval = useInterval(value as string);

  useEffect(() => {
    if (!value) {
      update({ [intervalFilter as string]: DATES_OPTIONS_ENUM.LAST_SEVEN_DAYS });
    }
  }, [value, intervalFilter, update]);

  return (
    <Context.Provider value={{ interval }} {...props}>
      <TableProvider {...props}>{children}</TableProvider>
    </Context.Provider>
  );
};

// Default hook to retrieve context data
const useReportSaleContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { ReportSaleProvider, useReportSaleContext };
