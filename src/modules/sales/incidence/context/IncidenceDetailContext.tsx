import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOneIncidence } from '../hooks/useFindOneIncidence';
import { IIncidence } from '../interfaces';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useParams } from 'react-router';

type IncidenceDetailContextValue = {
  incidenceId: string;
  incidence?: IIncidence;
  isLoading: boolean;
  error?: any;
};

// default value of the context
const defaultValue: IncidenceDetailContextValue = {
  isLoading: true,
  incidenceId: '',
};

// create context
const IncidenceDetailContext = createContext<IncidenceDetailContextValue>(defaultValue);

// Proptypes of Provider component
type IncidenceDetailContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const IncidenceDetailProvider = (props: IncidenceDetailContextProps) => {
  const { id } = useParams();
  const { data, isLoading, error } = useFindOneIncidence(id);
  useBreadcrumbName(id || '', data?.code, isLoading);

  return <IncidenceDetailContext.Provider value={{ incidence: data, isLoading, error, incidenceId: id as string }} {...props} />;
};

// Default hooks to retrieve context data
const useIncidenceDetail = () => {
  const context = useContext(IncidenceDetailContext);
  if (context === undefined) {
    throw new Error('You must be inside a IncidenceDetailProvider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { IncidenceDetailProvider, useIncidenceDetail };
