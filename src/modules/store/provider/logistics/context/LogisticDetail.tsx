import { createContext, useContext } from 'react';
import { useParams } from 'react-router'
import { ILogistics } from 'modules/store/provider/logistics/interfaces';
import { useFindOneLogistics } from 'modules/store/provider/logistics/hooks/useFindOneLogistics';

type LogisticContextValue = {
  logistic?: ILogistics;
  isLoading: boolean;
  error?: any;
  logisticId?: string;
};

// default value of the context
const defaultValue: LogisticContextValue = {
  isLoading: true,
};

// create context
const LogisticContext = createContext<LogisticContextValue>(defaultValue);

// Proptypes of Provider component
type LogisticContextPorps = {
  children: any;
};

const LogisticDetailProvider = (props: LogisticContextPorps) => {
  const { id } = useParams();

  const { isLoading, data: logistic, error } = useFindOneLogistics(id ?? null);

  return <LogisticContext.Provider
    value={{ logistic, isLoading, error, logisticId: id as string }} {...props} />;
};

const LogistcisDetail = () => {
  const context = useContext(LogisticContext)
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
}

export { LogistcisDetail, LogisticDetailProvider }
