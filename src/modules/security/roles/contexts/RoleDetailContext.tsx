import { createContext, useContext } from 'react';
import { useFindOneRoles } from 'modules/security/roles/hooks/useFindOneRoles';
import { ChildrenProps } from '@dfl/mui-react-common';
import { UseQueryResult } from '@tanstack/react-query';
import { IRole } from 'modules/security/roles/interfaces';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

type RoleDetailContextValue = UseQueryResult<IRole> & {
  roleId: string;
  type: SPACE_TYPE;
};
// create context
// @ts-ignore
const RoleDetailContext = createContext<RoleDetailContextValue>();

// Proptypes of Provider component
type RoleDetailContextProps = ChildrenProps & {
  roleId: string;
  type: SPACE_TYPE;
};

/**
 * Provider component
 * */
const RoleDetailProvider = ({ roleId, type, ...props }: RoleDetailContextProps) => {
  const query = useFindOneRoles(type, roleId);
  return <RoleDetailContext.Provider value={{ ...query, type, roleId }} {...props} />;
};

// Default hooks to retrieve context data
const useRoleDetail = () => {
  const context = useContext(RoleDetailContext);
  if (context === undefined) {
    throw new Error('You must be inside a RoleDetailProvider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { RoleDetailProvider, useRoleDetail };
