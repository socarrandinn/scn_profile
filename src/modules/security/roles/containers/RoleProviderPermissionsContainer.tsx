import { memo } from 'react';
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
import { Grid } from '@mui/material';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';

const RoleProviderPermissionsContainer = () => {
  const { t } = useTranslation('role');
  return (
    <>
      {/* <Grid container spacing={{ xs: 1, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule
            useHook={useRoleProviderDetail}
            permissionsOptions={INVENTORY_PERMISSIONS}
            label={t('inventory')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule
            useHook={useRoleProviderDetail}
            permissionsOptions={SALES_PERMISSIONS}
            label={t('sales')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule
            useHook={useRoleProviderDetail}
            permissionsOptions={CLIENT_USERS_PERMISSIONS}
            label={t('clients')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule
            useHook={useRoleProviderDetail}
            permissionsOptions={CONTENT_PERMISSIONS}
            label={t('content')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule
            useHook={useRoleProviderDetail}
            permissionsOptions={REPORTS_PERMISSIONS}
            label={t('reports')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule
            useHook={useRoleProviderDetail}
            permissionsOptions={SECURITY_PERMISSIONS}
            label={t('security')}
          />
        </Grid>
      </Grid> */}
    </>
  );
};

export default memo(RoleProviderPermissionsContainer);
