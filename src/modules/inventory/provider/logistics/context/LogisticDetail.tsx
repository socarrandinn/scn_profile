import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { useFindOneLogistics } from 'modules/inventory/provider/logistics/hooks/useFindOneLogistics';
import useMultipleToggle from 'hooks/useMultipleToggle';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

type LogisticContextValue = {
  logistic?: ILogistics;
  isLoading: boolean;
  error?: any;
  logisticId?: string;
  onAllToggle?: () => void,
  onOneClose?: (st: string) => void,
  onOneOpen?: (st: string) => void,
  onOneToggle?: (st: string) => void,
  state?: Record<string, boolean>
  allOpen?: boolean
};

// default value of the context
const defaultValue: LogisticContextValue = {
  isLoading: true
};

// create context
const LogisticContext = createContext<LogisticContextValue>(defaultValue);

// Proptypes of Provider component
type LogisticContextPorps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
  form_3: false,
};

const LogisticDetailProvider = (props: LogisticContextPorps) => {
  const { id } = useParams();
  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);
  const { isLoading, data: logistic, error } = useFindOneLogistics(id ?? null);

  useBreadcrumbName(logistic?._id || '', logistic?.name, isLoading);

  return (
    <LogisticContext.Provider
      value={{
        onAllToggle,
        onOneClose,
        onOneOpen,
        onOneToggle,
        allOpen,
        state,
        logistic,
        isLoading,
        error,
        logisticId: id as string,
      }}
      {...props}
    />
  );
};

const useLogisticsDetailContext = () => {
  const context = useContext(LogisticContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useLogisticsDetailContext, LogisticDetailProvider };
