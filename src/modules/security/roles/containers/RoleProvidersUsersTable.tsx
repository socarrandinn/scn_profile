import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { Paper } from '@mui/material';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import { RoleProviderUsersList } from '../components/RoleProviderUsersList/RoleProviderUsersList';
import { roleProviderListFilters } from '../constants/role-provider.filters';

const RoleProviderUsersTable = () => {
  const { data, roleId } = useRoleProviderDetail();
  return (
        <Paper sx={{ marginBottom: 3, padding: 4 }}>
            <TableProvider id={'role-provider-users'} filters={roleProviderListFilters} >
                <RoleProviderUsersList providerType={data?.type} roleId={roleId} />
            </TableProvider>
        </Paper>
  );
};

export default memo(RoleProviderUsersTable);
