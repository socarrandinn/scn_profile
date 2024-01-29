import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { IClients } from 'modules/crm/clients/interfaces';
import { useFindOneClients } from 'modules/crm/clients/hooks/useFindOneClients';

// Data value of the provider context
type ClientContextValue = {
  client?: IClients;
  isLoading: boolean;
  setClient?: Dispatch<SetStateAction<IClients | undefined>>;
  error?: any;
  clientId?: string;
};
// default value of the context
const defaultValue: ClientContextValue = {
  isLoading: true,
};

// create context
const ClientContext = createContext<ClientContextValue>(defaultValue);

// Proptypes of Provider component
type ClientContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ClientDetailsProvider = (props: ClientContextProps) => {
  const { id } = useParams();

  const { isLoading, data: client, error } = useFindOneClients(id ?? null);

  useBreadcrumbName(client?._id || '', client?.fullName, isLoading);

  return <ClientContext.Provider value={{ client, isLoading, error, clientId: id }} {...props} />;
};

// Default hooks to retrieve context data
const useClientDetails = (): ClientContextValue => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    return { isLoading: false } satisfies ClientContextValue;
  }
  return context;
};

export { ClientDetailsProvider, useClientDetails };
