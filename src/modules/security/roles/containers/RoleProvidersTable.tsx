import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { Paper } from '@mui/material';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import { RoleProvidersList } from '../components/RoleProvidersList/RoleProvidersList';

const RoleProvidersTable = () => {
    const { roleId } = useRoleProviderDetail();

    return (
        <Paper sx={{ marginBottom: 3, padding: 4 }}>
            <TableProvider id={'role-providers'}>
                <RoleProvidersList roleId={roleId} />
            </TableProvider>
        </Paper>
    );
};

export default memo(RoleProvidersTable);
