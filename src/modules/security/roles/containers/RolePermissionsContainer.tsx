import { memo, useCallback, useEffect, useState } from 'react';
import PermissionBoxModule from '../components/PermissionModule/PermissionBoxModule';
import {
  CLIENT_USERS_PERMISSIONS,
  CONTENT_PERMISSIONS,
  INVENTORY_PERMISSIONS,
  REPORTS_PERMISSIONS,
  SALES_PERMISSIONS,
  SECURITY_PERMISSIONS,
} from '../constants/permissions-module';
import { Box, Grid } from '@mui/material';
import PermissionToolbarModule from '../components/PermissionModule/PermissionToolbarModule';
import useAddPermissionToRoleProviderForm from '../hooks/useAddPermissionToRoleProviderForm';
import { useRoleDetail } from '../contexts';

export const modules = [
  { label: 'inventory', permissions: INVENTORY_PERMISSIONS },
  { label: 'sales', permissions: SALES_PERMISSIONS },
  { label: 'clients', permissions: CLIENT_USERS_PERMISSIONS },
  { label: 'content', permissions: CONTENT_PERMISSIONS },
  { label: 'reports', permissions: REPORTS_PERMISSIONS },
  { label: 'security', permissions: SECURITY_PERMISSIONS },
];

const RolePermissionsContainer = () => {
  const [selectedBoxModules, setSelectedBoxModules] = useState<string[]>([]);
  const [permissionsChanged, setPermsissionsChanged] = useState(false);
  const { data: role } = useRoleDetail();
  const [permissions, setPermissions] = useState<string[]>(role?.permissions || []);

  useEffect(() => {
    setPermissions(role?.permissions || []);
  }, [role?.permissions]);

  const { mutate: addPermission } = useAddPermissionToRoleProviderForm(role);

  const handleSavePermissions = useCallback(() => {
    addPermission(permissions, {
      onSuccess: () => {
        setPermsissionsChanged(false);
      },
    });
  }, [addPermission, permissions, status]);

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
