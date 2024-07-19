import { createContext, useContext, useEffect, useState } from 'react';
import { useFindOneRoles } from 'modules/security/roles/hooks/useFindOneRoles';
import { ChildrenProps } from '@dfl/mui-react-common';
import { UseQueryResult } from '@tanstack/react-query';
import { IRole } from 'modules/security/roles/interfaces';

type RoleDetailContextValue = UseQueryResult<IRole> & {
  roleId: string;
  permissions: string[];
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
};
// create context
// @ts-ignore
const RoleDetailContext = createContext<RoleDetailContextValue>();

// Proptypes of Provider component
type RoleDetailContextProps = ChildrenProps & {
  roleId: string;
};

/**
 * Provider component
 * */
const RoleDetailProvider = ({ roleId, ...props }: RoleDetailContextProps) => {
  const query = useFindOneRoles(roleId);
  const [permissions, setPermissions] = useState<string[]>(query.data?.permissions || []);
  useEffect(() => {
    if (query.data?.permissions) {
      setPermissions(query.data.permissions);
    }
  }, [query.data]);

  return <RoleDetailContext.Provider value={{ ...query, roleId, permissions, setPermissions }} {...props} />;
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
