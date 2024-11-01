import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import { modules } from './RolePermissionsContainer';
import useAddPermissionToRoleProviderForm from '../hooks/useAddPermissionToRoleProviderForm';
import PermissionToolbarModule from '../components/PermissionModule/PermissionToolbarModule';
import { Box, Grid } from '@mui/material';
import PermissionBoxModule from '../components/PermissionModule/PermissionBoxModule';

const RoleProviderPermissionsContainer = () => {
  const { data: role } = useRoleProviderDetail();
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
  const [permissionsChanged, setPermissionsChanged] = useState<boolean>(false);

  useEffect(() => {
    setPermissions(role?.permissions || []);
    setSelectedBoxModules(initValues);
  }, [role?.permissions, initValues]);

  const { mutate: addPermission } = useAddPermissionToRoleProviderForm(role);

  const handleSavePermissions = useCallback(() => {
    addPermission(permissions, {
      onSuccess: () => {
        setPermissionsChanged(false);
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
                    setPermsissionsChanged={setPermissionsChanged}
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

export default memo(RoleProviderPermissionsContainer);
