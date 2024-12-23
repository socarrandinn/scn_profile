import { IUser } from 'modules/security/users/interfaces/IUser';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { useUser } from '@dfl/react-security';
import { useQueryClient } from '@tanstack/react-query';
import { USER_ME_KEY } from 'modules/security/users/constants/queries';

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
  const [isLoading, setIsLoading] = useState(true); // to solve input issues
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!data);
    }, 100);
  }, [data]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  const value = useMemo(() => {
    return {
      user, setUser, isLoading, error: false,
    };
  }, [user, isLoading]);

  return <UserContext.Provider value={value} {...props} />;
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
