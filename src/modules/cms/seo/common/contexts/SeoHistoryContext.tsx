import { Dispatch, SetStateAction, createContext, useCallback, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useSearchParams } from 'react-router-dom';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';

// Data value of the provider context
type SeoHistoryContextValue = {
  data?: {
    data: IAuditLogEntity[];
    total: number;
  };
  isLoading?: boolean;
  error?: any;
  checkSeoHistory?: string | null;
  setCheckSeoHistory?: Dispatch<SetStateAction<string>>;
  handleCloseSeoHistory?: () => void;
};
// default value of the context
const defaultValue: SeoHistoryContextValue = {};

// create context
const SeoHistoryContext = createContext<SeoHistoryContextValue>(defaultValue);

// Proptypes of Provider component
type SeoHistoryContextProps = ChildrenProps & {
  children: any;
  useHook: any;
};

/**
 * Provider component
 * */
const SeoHistoryProvider = ({ useHook, ...props }: SeoHistoryContextProps) => {
  const { data, isLoading, error } = useHook();
  const [searchParams, setSearchParams] = useSearchParams();
  const checkSeoHistory = searchParams.get('entity');

  const handleCloseSeoHistory = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.entity;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <SeoHistoryContext.Provider value={{ data, isLoading, error, checkSeoHistory, handleCloseSeoHistory }} {...props} />
  );
};

// Default hook to retrieve context data
const useSeoHistoryContext = () => {
  const context = useContext(SeoHistoryContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { SeoHistoryProvider, useSeoHistoryContext };
