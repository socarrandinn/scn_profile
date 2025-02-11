import { memo } from 'react';
import { HeadCell, Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { RoleListToolbar } from 'modules/security/roles/components/RoleListToolbar';
import RoleEditModal from 'modules/security/roles/containers/RoleEditModal';
import { RoleRowPermission } from 'modules/security/roles/contexts/RoleRowPermissionContext';
import { useFindRolesTable } from 'modules/security/roles/hooks/useFindRoles';
import { roleColumns } from 'modules/security/roles/constants';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleListContainer = ({ type, columns = roleColumns }: { type: SPACE_TYPE, columns?: HeadCell[] }) => {
  const { isLoading, error, data } = useFindRolesTable(type);

  return (
    <Box>
      <RoleRowPermission>
        <RoleListToolbar type={type} />
        <Table
          columns={columns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
        />
        <RoleEditModal type={type} />
      </RoleRowPermission>
    </Box>
  );
};

export default memo(RoleListContainer);
