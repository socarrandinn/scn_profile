import { memo } from 'react';
import PermissionBoxModule from '../components/PermissionModuleBox/PermissionBoxModule';
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

const RolePermissionsContainer = () => {
  const { t } = useTranslation('role');
  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule permissionsOptions={INVENTORY_PERMISSIONS} label={t('inventory')} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule permissionsOptions={SALES_PERMISSIONS} label={t('sales')} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule permissionsOptions={CLIENT_USERS_PERMISSIONS} label={t('clients')} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule permissionsOptions={CONTENT_PERMISSIONS} label={t('content')} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule permissionsOptions={REPORTS_PERMISSIONS} label={t('reports')} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <PermissionBoxModule permissionsOptions={SECURITY_PERMISSIONS} label={t('security')} />
        </Grid>
      </Grid>
      {/* </FlexBox> */}
    </Box>
  );
};

export default memo(RolePermissionsContainer);
