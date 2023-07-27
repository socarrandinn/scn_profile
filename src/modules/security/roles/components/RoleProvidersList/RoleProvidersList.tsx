import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { userColumns } from 'modules/security/roles/constants/role-user.columns';
import { useFindProvidersByRole } from 'modules/security/roles/hooks/useFindProvidersByRole';
import { RoleProvidersListToolbar } from '../RoleProvidersListToolbar';
import { useFindRolesProvidersTable } from '../../hooks/useFindRolesProviders';

type RoleUsersListProps = {
    roleId: string;
};

export const RoleProvidersList = ({ roleId }: RoleUsersListProps) => {
    const { isLoading, error, data } = useFindRolesProvidersTable();
    return (
        <Box>
            <RoleProvidersListToolbar />
            <Table columns={userColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
        </Box>
    );
};