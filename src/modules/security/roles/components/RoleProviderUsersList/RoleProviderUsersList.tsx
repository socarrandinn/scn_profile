import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import RoleProviderUserListToolbar from '../RoleProviderUserListToolbar/RoleProviderUserListToolbar';
import { selectColumnsForProviderType } from '../../utils';
import { useFindProvidersByRole } from '../../hooks/useFindProvidersByRole';
import { userColumns } from 'modules/security/users/constants/user.columns';

type RoleProviderTypeUsersListProps = {
    providerType?: string;
    roleId: string;
};

export const RoleProviderUsersList = ({ providerType, roleId }: RoleProviderTypeUsersListProps) => {
    const { isLoading, error, data } = useFindProvidersByRole(roleId);

    return (
        <Box>
            <RoleProviderUserListToolbar roleId={roleId} providerType={providerType} />
            <Table
                columns={userColumns}
                data={data?.data}
                total={data?.total}
                isLoading={isLoading}
                error={error}
                select
            />
        </Box>
    );
};
