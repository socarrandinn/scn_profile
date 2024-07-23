import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { RoleListToolbar } from 'modules/security/roles/components/RoleListToolbar';
import RoleEditModal from 'modules/security/roles/containers/RoleEditModal';
import { RoleRowPermissionProvider } from 'modules/security/roles/contexts/RoleRowPermissionContext';
import { useFindSystemRolesTable } from 'modules/security/roles/hooks/useFindRoles';
import { roleColumns } from 'modules/security/roles/constants';

const RoleListContainer = () => {
  const { isLoading, error, data } = useFindSystemRolesTable();

  return (
    <Box>
      <RoleRowPermissionProvider>
        <RoleListToolbar />
        <Table columns={roleColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
        <RoleEditModal />
      </RoleRowPermissionProvider>
    </Box>
  );
};

export default memo(RoleListContainer);
