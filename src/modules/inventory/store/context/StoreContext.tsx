import { IStore } from 'modules/inventory/store/interfaces';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFindOneStore } from 'modules/inventory/store/hooks/useFindOneStore';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import useMultipleToggle from 'hooks/useMultipleToggle';

type StoreContextValue = {
  store?: IStore;
  isLoading: boolean;
  setStore?: Dispatch<SetStateAction<IStore | undefined>>;
  error?: any;
  storeId: string;
  onAllToggle?: (open?: boolean) => void;
  onOneClose?: (st: string) => void;
  onOneOpen?: (st: string) => void;
  onOneToggle?: (st: string) => void;
  state?: Record<string, boolean>;
  allOpen?: boolean;
};
const defaultValue: StoreContextValue = {
  isLoading: true,
  storeId: '',
};

// create context
const StoreContext = createContext<StoreContextValue>(defaultValue);

type StoreContextProps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
  form_3: false,
  form_4: false,
};

const StoreDetailProvider = (props: StoreContextProps) => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get('edit');
  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);
  const { isLoading, data, error } = useFindOneStore(id ?? null);
  const [store, setStore] = useState<IStore>();
  useBreadcrumbName(id || '', store?.name, isLoading);

  useEffect(() => {
    if (isEdit && data) {
      onAllToggle?.();
    }
  }, [isEdit, data]);

  useEffect(() => {
    if (data) {
      setStore(data);
    }
  }, [data, setStore]);

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
        isLoading,
        error,
        storeId: id as string,
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

const useStoreDetail = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { StoreDetailProvider, useStoreDetail };
