import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindEmailUserInvite } from '../hooks/useFindEmailUserInvite';
// Data value of the provider context
type UserInviteContextValue = {
  data?: any;
  isLoading?: boolean;
  error?: any;
};
// default value of the context
const defaultValue: UserInviteContextValue = {};

// create context
const UserInviteContext = createContext<UserInviteContextValue>(defaultValue);

// Proptypes of Provider component
type UserInviteContextProps = ChildrenProps & {
  children: any;
  inviteCode: string;
};

/**
 * Provider component
 * */
const UserInviteProvider = ({ inviteCode, ...props }: UserInviteContextProps) => {
  const { data, isLoading, error } = useFindEmailUserInvite(inviteCode);

  return <UserInviteContext.Provider value={{ data, isLoading, error }} {...props} />;
};

// Default hook to retrieve context data
const useUserInviteContext = () => {
  const context = useContext(UserInviteContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { UserInviteProvider, useUserInviteContext };
