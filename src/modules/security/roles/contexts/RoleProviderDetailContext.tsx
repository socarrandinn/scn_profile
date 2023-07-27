import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { UseQueryResult } from '@tanstack/react-query';
import { IRoleProvider } from 'modules/security/roles/interfaces';
import { useFindOneRoleProvider } from '../hooks/useFindOneRoleProvider';

type RoleProviderDetailContextValue = UseQueryResult<IRoleProvider> & {
  roleId: string;
};
// create context
// @ts-ignore
const RoleProviderDetailContext = createContext<RoleProviderDetailContextValue>();

// Proptypes of Provider component
type RoleProviderDetailContextProps = ChildrenProps & {
  roleId: string;
};

/**
 * Provider component
 * */
const RoleProviderDetailProvider = ({ roleId, ...props }: RoleProviderDetailContextProps) => {
  const query = useFindOneRoleProvider(roleId);

  return <RoleProviderDetailContext.Provider value={{ ...query, roleId }} {...props} />;
};

// Default hooks to retrieve context data
const useRoleProviderDetail = () => {
  const context = useContext(RoleProviderDetailContext);
  if (context === undefined) {
    throw new Error('You must be inside a RoleProviderDetailProvider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { RoleProviderDetailProvider, useRoleProviderDetail };
