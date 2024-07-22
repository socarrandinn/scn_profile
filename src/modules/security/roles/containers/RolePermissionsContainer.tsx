import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import PermissionBoxModule from '../components/PermissionModule/PermissionBoxModule';
import {
  CLIENT_USERS_PERMISSIONS,
  CONTENT_PERMISSIONS,
  INVENTORY_PERMISSIONS,
  REPORTS_PERMISSIONS,
  SALES_PERMISSIONS,
  SECURITY_PERMISSIONS,
} from '../constants/permissions-module';
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';
import PermissionToolbarModule from '../components/PermissionModule/PermissionToolbarModule';
import useAddPermissionToRoleProviderForm from '../hooks/useAddPermissionToRoleProviderForm';
import { useRoleDetail } from '../contexts';

const RolePermissionsContainer = () => {
  const { t } = useTranslation('role');
  const [selectedBoxModules, setSelectedBoxModules] = useState<string[]>([]);
  const [stateChanged, setStateChanged] = useState(false);

  const modules = useMemo(
    () => [
      { label: t('inventory'), permissions: INVENTORY_PERMISSIONS },
      { label: t('sales'), permissions: SALES_PERMISSIONS },
      { label: t('clients'), permissions: CLIENT_USERS_PERMISSIONS },
      { label: t('content'), permissions: CONTENT_PERMISSIONS },
      { label: t('reports'), permissions: REPORTS_PERMISSIONS },
      { label: t('security'), permissions: SECURITY_PERMISSIONS },
    ],
    [t],
  );

  const { data: role } = useRoleDetail();
  const [permissionsModule, setPermissionsModule] = useState<Record<string, string[]>>(
    role?.permissions?.reduce((acc: Record<string, string[]>, perm: string) => {
      const [moduleName, permission] = perm.split(':');
      if (!permission || permission === 'undefined') return acc;
      if (!acc[moduleName]) {
        acc[moduleName] = [];
      }
      acc[moduleName].push(permission);
      return acc;
    }, {}) || {},
  );

  const { mutate: addPermission, status } = useAddPermissionToRoleProviderForm(role);

  const handleSavePermissions = useCallback(() => {
    const allPermissions = Object.values(permissionsModule).flat();
    addPermission(allPermissions);
    if (status === 'success') {
      setStateChanged(false);
    }
  }, [addPermission, permissionsModule, status]);

  return (
    <>
      <PermissionToolbarModule
        modules={modules.map((module): string => module.label)}
        selectedBoxModules={selectedBoxModules}
        setSelectedBoxModules={setSelectedBoxModules}
        stateChanged={stateChanged}
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
                    setStateChanged={setStateChanged}
                    permissionsModule={permissionsModule}
                    setPermissionsModule={setPermissionsModule}
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
