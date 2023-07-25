import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersByRole } from 'modules/security/users/hooks/useFindUsersByRole';
import { userColumns } from 'modules/security/roles/constants/role-user.columns';
import RoleProviderUserListToolbar from '../RoleProviderUserListToolbar/RoleProviderUserListToolbar';
import { useFindProductProviders } from '../../hooks/useFindProductProviders';

type RoleProviderTypeUsersListProps = {
  providerType: string;
  roleId: string;
};

export const RoleProviderUsersList = ({ providerType, roleId }: RoleProviderTypeUsersListProps) => {
  const { isLoading, error, data } = useFindProductProviders(providerType);
  return (
    <Box>
      <RoleProviderUserListToolbar roleId={roleId} providerType={providerType} />
      <Table columns={userColumns} data={data.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};
