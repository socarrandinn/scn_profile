import { IStore } from 'modules/inventory/store/interfaces';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFindOneStore } from 'modules/inventory/store/hooks/useFindOneStore';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

type StoreContextValue = {
  store?: IStore;
  isLoading: boolean;
  setStore?: Dispatch<SetStateAction<IStore | undefined>>;
  error?: any;
  storeId: string;
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

const StoreDetailProvider = (props: StoreContextProps) => {
  const { id } = useParams();
  const { isLoading, data, error } = useFindOneStore(id ?? null);
  const [store, setStore] = useState<IStore>();
  useBreadcrumbName(id || '', store?.name, isLoading);

  useEffect(() => {
    if (data) {
      setStore(data);
    }
  }, [data, setStore]);

  return <StoreContext.Provider value={{ store, setStore, isLoading, error, storeId: id as string }} {...props} />;
};

const useStoreDetail = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { StoreDetailProvider, useStoreDetail };
