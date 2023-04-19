import { IUser } from 'modules/security/users/interfaces/IUser';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useUser } from '@dfl/react-security';

// Data value of the provider context
type UserContextValue = {
  user?: IUser;
  isLoading: boolean;
  setUser?: Dispatch<SetStateAction<IUser | undefined>>;
  error?: any;
};
// default value of the context
const defaultValue: UserContextValue = {
  isLoading: true,
};

// create context
const UserContext = createContext<UserContextValue>(defaultValue);

// Proptypes of Provider component
type UserContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const UserDetailProvider = (props: UserContextProps) => {
  const { user: data } = useUser();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return <UserContext.Provider value={{ user, setUser, isLoading: false, error: false }} {...props} />;
};

// Default hooks to retrieve context data
const useUserDetail = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { UserDetailProvider, useUserDetail };
