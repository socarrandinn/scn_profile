import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import AddPermissionToRoleModalWithData from 'modules/security/roles/containers/AddPermissionToRoleModalWithData';
import { RoleRowPermissionProvider } from 'modules/security/roles/contexts/RoleRowPermissionContext';
import { useFindRolesProvidersTable } from '../hooks/useFindRolesProviders';
import RoleProviderEditModal from './RoleProviderEditModal';
import { roleProviderColumns } from '../constants/role-provider.columns';
import { RoleProvidersListToolbar } from '../components/RoleProvidersListToolbar';

const RoleProviderListContainer = () => {
  const { isLoading, error, data } = useFindRolesProvidersTable();

  return (
    <Box>
      <RoleRowPermissionProvider>
        <RoleProvidersListToolbar />
        <Table
          columns={roleProviderColumns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
        />
        <RoleProviderEditModal />
        <AddPermissionToRoleModalWithData />
      </RoleRowPermissionProvider>
    </Box>
  );
};

export default memo(RoleProviderListContainer);
