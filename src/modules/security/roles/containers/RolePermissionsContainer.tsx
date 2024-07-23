import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import PermissionBoxModule from '../components/PermissionModule/PermissionBoxModule';

import { Box, Grid } from '@mui/material';
import PermissionToolbarModule from '../components/PermissionModule/PermissionToolbarModule';
import { useRoleDetail } from '../contexts';
import useAddPermissionToRoleForm from '../hooks/useAddPermissionToRoleForm';
import { IModule } from '../interfaces';
import {
  ClientUsersPermissions,
  ContentPermissions,
  InventoryPermissions,
  ReportsPermissions,
  SalesPermissions,
  SecurityPermissions,
} from '../interfaces/permissions';

export type Permission =
  | InventoryPermissions
  | SalesPermissions
  | ClientUsersPermissions
  | ContentPermissions
  | ReportsPermissions
  | SecurityPermissions;

export const modules: IModule[] = [
  { label: 'inventory', permissions: Object.values(InventoryPermissions) as Permission[] },
  { label: 'sales', permissions: Object.values(SalesPermissions) as Permission[] },
  { label: 'clients', permissions: Object.values(ClientUsersPermissions) as Permission[] },
  { label: 'content', permissions: Object.values(ContentPermissions) as Permission[] },
  { label: 'reports', permissions: Object.values(ReportsPermissions) as Permission[] },
  { label: 'security', permissions: Object.values(SecurityPermissions) as Permission[] },
];
const RolePermissionsContainer = () => {
  const { data: role } = useRoleDetail();
  const rolePermissions = role?.permissions || [];
  const filterMatchedModules = useMemo(() => {
    return modules.filter((module) => {
      // @ts-ignore
      return rolePermissions.some((permission) => module.permissions.includes(permission));
    });
  }, [rolePermissions]);
  const initValues = useMemo(() => {
    return filterMatchedModules.map((module) => module.label);
  }, [filterMatchedModules]);
  const [permissions, setPermissions] = useState<string[]>(role?.permissions || []);
  const [selectedBoxModules, setSelectedBoxModules] = useState<string[]>(initValues || []);
  const [permissionsChanged, setPermsissionsChanged] = useState<boolean>(false);

  useEffect(() => {
    setPermissions(role?.permissions || []);
    setSelectedBoxModules(initValues);
  }, [role?.permissions, initValues]);

  const { mutate: addPermission } = useAddPermissionToRoleForm(role);

  const handleSavePermissions = useCallback(() => {
    addPermission(permissions, {
      onSuccess: () => {
        setPermsissionsChanged(false);
      },
    });
  }, [addPermission, permissions]);

  return (
    <>
      <PermissionToolbarModule
        modules={modules.map((module): string => module.label)}
        selectedBoxModules={selectedBoxModules}
        setSelectedBoxModules={setSelectedBoxModules}
        permissionsChanged={permissionsChanged}
        handleSavePermissions={handleSavePermissions}
      />
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={{ xs: 1, md: 3 }}>
          {modules.map(
            (module) =>
              selectedBoxModules.includes(module.label) && (
                <Grid item xs={12} sm={6} md={4} xl={3} key={module.label}>
                  <PermissionBoxModule
                    permissionsOptions={module.permissions}
                    label={module.label}
                    setPermsissionsChanged={setPermsissionsChanged}
                    permissions={permissions}
                    setPermissions={setPermissions}
                  />
                </Grid>
              ),
          )}
        </Grid>
      </Box>
    </>
  );
};

export default memo(RolePermissionsContainer);
