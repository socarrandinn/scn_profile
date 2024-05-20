import { Dispatch, SetStateAction, createContext, useCallback, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { IAuditLogEntity } from '../interfaces';
import { useSearchParams } from 'react-router-dom';
// Data value of the provider context
type AuditLogEntityContextValue = {
  data?: {
    data: IAuditLogEntity[];
    total: number;
  };
  isLoading?: boolean;
  error?: any;
  checkEntity?: string | null;
  setCheckEntity?: Dispatch<SetStateAction<string>>;
  handleCloseEntity?: () => void;
};
// default value of the context
const defaultValue: AuditLogEntityContextValue = {};

// create context
const AuditLogEntityContext = createContext<AuditLogEntityContextValue>(defaultValue);

// Proptypes of Provider component
type AuditLogEntityContextProps = ChildrenProps & {
  children: any;
  entityId?: string;
  useHook?: any;
};

/**
 * Provider component
 * */
const AuditLogEntityProvider = ({ useHook, entityId, ...props }: AuditLogEntityContextProps) => {
  const { data, isLoading, error } = useHook(entityId ?? undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const checkEntity = searchParams.get('entity');

  const handleCloseEntity = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.entity;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <AuditLogEntityContext.Provider value={{ data, isLoading, error, checkEntity, handleCloseEntity }} {...props} />
  );
};

// Default hook to retrieve context data
const useAuditLogEntityContext = () => {
  const context = useContext(AuditLogEntityContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { AuditLogEntityProvider, useAuditLogEntityContext };
