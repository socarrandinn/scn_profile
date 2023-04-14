import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { RoleUsersList } from 'modules/security/roles/components/RoleUsersList';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { Paper } from '@mui/material';

const RoleUsersTable = () => {
  const { roleId } = useRoleDetail();

  return (
    <Paper sx={{ marginBottom: 3, padding: 4 }}>
      <TableProvider id={'role-users'}>
        <RoleUsersList roleId={roleId} />
      </TableProvider>
    </Paper>
  );
};

export default memo(RoleUsersTable);
