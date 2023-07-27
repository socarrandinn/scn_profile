import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { Paper } from '@mui/material';
import RoleProvidersList from '../components/RoleProvidersList/RoleProvidersList';

const RoleProvidersTable = () => {
  return (
    <Paper sx={{ marginBottom: 3, padding: 4 }}>
      <TableProvider id={'role-providers'}>
        <RoleProvidersList />
      </TableProvider>
    </Paper>
  );
};

export default memo(RoleProvidersTable);
