import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindAuditLogsByEntity } from '../hooks/useFindAuditLogsByEntity';
import { IAuditLogEntity } from '../interfaces';
// Data value of the provider context
type AuditLogEntityContextValue = {
  data?: {
    data: IAuditLogEntity[];
  };
  isLoading?: boolean;
  error?: any;
  checkEntity?: string;
  setCheckEntity?: Dispatch<SetStateAction<string>>;
};
// default value of the context
const defaultValue: AuditLogEntityContextValue = {};

// create context
const AuditLogEntityContext = createContext<AuditLogEntityContextValue>(defaultValue);

// Proptypes of Provider component
type AuditLogEntityContextProps = ChildrenProps & {
  children: any;
  entityId: string;
};

/**
 * Provider component
 * */
const AuditLogEntityProvider = ({ entityId, ...props }: AuditLogEntityContextProps) => {
  const { data, isLoading, error } = useFindAuditLogsByEntity(entityId);
  const [checkEntity, setCheckEntity] = useState('');

  useEffect(() => {
    if (data) {
      setCheckEntity(data?.[0]?._id);
    }
  }, [data, setCheckEntity]);

  return <AuditLogEntityContext.Provider value={{ data, isLoading, error, checkEntity, setCheckEntity }} {...props} />;
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
