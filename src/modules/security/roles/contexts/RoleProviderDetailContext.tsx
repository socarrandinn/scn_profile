import { createContext, useContext } from 'react';
import { useFindOneRoles } from 'modules/security/roles/hooks/useFindOneRoles';
import { ChildrenProps } from '@dfl/mui-react-common';
import { UseQueryResult } from '@tanstack/react-query';
import { IRole } from 'modules/security/roles/interfaces';

type RoleProviderDetailContextValue = UseQueryResult<IRole> & {
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
  const query = useFindOneRoles(roleId);

  return <RoleProviderDetailContext.Provider value={{ ...query, roleId }} {...props} />;
};

// Default hooks to retrieve context data
const useRoleProviderDetail = () => {
  const context = useContext(RoleProviderDetailContext);
  if (context === undefined) {
    throw new Error('You must be inside a RoleDetailProvider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { RoleProviderDetailProvider, useRoleProviderDetail };
