import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { Paper } from '@mui/material';
import { useRoleProviderDetail } from 'modules/security/roles/contexts/RoleProviderDetailContext';
import { RoleProviderUsersList } from 'modules/security/roles/components/RoleProviderUsersList/RoleProviderUsersList';

const RoleProviderUsersTable = () => {
  const { data, roleId } = useRoleProviderDetail();
  return (
        <Paper sx={{ marginBottom: 3, padding: 4 }}>
            <TableProvider id={'role-provider-users'}>
                <RoleProviderUsersList providerType={data?.provider} roleId={roleId} />
            </TableProvider>
        </Paper>
  );
};

export default memo(RoleProviderUsersTable);
