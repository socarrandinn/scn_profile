import { IStore } from 'modules/store/store/interfaces';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFindOneStore } from 'modules/store/store/hooks/useFindOneStore';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';

type StoreContextValue = {
  store?: IStore;
  isLoading: boolean;
  // user?: IUser;
  setStore?: Dispatch<SetStateAction<IStore | undefined>>;
  // setUser?: Dispatch<SetStateAction<IUser | undefined>>;
  error?: any;
}
const defaultValue: StoreContextValue = {
  isLoading: true,
};

// create context
const StoreContext = createContext<StoreContextValue>(defaultValue);

type StoreContextProps = {
  children: any;
};

const StoreDetailProvider = (props: StoreContextProps) => {
  const { id } = useParams();

  const { isLoading, data, error } = useFindOneStore(id ?? null);
  // const { data } = useFindOneUsers(data?.logistic as string)

  const [store, setStore] = useState<IStore>();
  // const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (data) {
      setStore(data);
    }
  }, [data, setStore]);

  return <StoreContext.Provider value={{ store, setStore, isLoading, error }} {...props} />;
};

const useStoreDetail = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { StoreDetailProvider, useStoreDetail };
