
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFindOneDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindOneDistributionCenters';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import useMultipleToggle from 'hooks/useMultipleToggle';
import { IDistributionCenters } from '../interfaces';

type DistributioncentersContextValue = {
  distributionCenter?: IDistributionCenters;
  isLoading: boolean;
  setDistributionCenters?: Dispatch<SetStateAction<IDistributionCenters | undefined>>;
  error?: any;
  distributionCenterId: string;
  onAllToggle?: (open?: boolean) => void;
  onOneClose?: (st: string) => void;
  onOneOpen?: (st: string) => void;
  onOneToggle?: (st: string) => void;
  state?: Record<string, boolean>;
  allOpen?: boolean;
};
const defaultValue: DistributioncentersContextValue = {
  isLoading: true,
  distributionCenterId: '',
};

// create context
const DistributioncentersContext = createContext<DistributioncentersContextValue>(defaultValue);

type DistributioncentersContextProps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
  form_3: false,
  form_4: false,
  form_5: false,
  form_6: false,
};

const DistributionCenterDetailProvider = (props: DistributioncentersContextProps) => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get('edit');
  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);
  const { isLoading, data, error } = useFindOneDistributionCenters(id ?? null);
  const [distributionCenter, setDistributionCenters] = useState<IDistributionCenters>();
  useBreadcrumbName(id || '', distributionCenter?.name, isLoading);

  useEffect(() => {
    if (isEdit && !isLoading && data && !distributionCenter) {
      onAllToggle?.();
    }
  }, [isEdit, data, onAllToggle, isLoading, distributionCenter]);

  useEffect(() => {
    if (data) {
      setDistributionCenters(data);
    }
  }, [data, setDistributionCenters]);

  return (
    <DistributioncentersContext.Provider
      value={{
        distributionCenter,
        setDistributionCenters,
        isLoading,
        error,
        distributionCenterId: id as string,
        onAllToggle,
        onOneClose,
        onOneOpen,
        onOneToggle,
        state,
        allOpen,
      }}
      {...props}
    />
  );
};

const useDistributionCenterDetail = () => {
  const context = useContext(DistributioncentersContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { DistributionCenterDetailProvider, useDistributionCenterDetail };
