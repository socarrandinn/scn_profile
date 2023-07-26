import { HeadCell, Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import RoleProviderUserListToolbar from '../RoleProviderUserListToolbar/RoleProviderUserListToolbar';
import { selectColumnsForProviderType } from '../../utils';
import { useFindProvidersByRole } from '../../hooks/useFindProvidersByRole';

type RoleProviderTypeUsersListProps = {
  providerType?: string;
  roleId: string;
};

export const RoleProviderUsersList = ({ providerType, roleId }: RoleProviderTypeUsersListProps) => {
  const { isLoading, error, data } = useFindProvidersByRole(providerType);

  return (
    <Box>
      <RoleProviderUserListToolbar roleId={roleId} providerType={providerType} />
      <Table
        columns={selectColumnsForProviderType(providerType)}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};
