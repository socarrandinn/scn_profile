import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersByRole } from 'modules/security/users/hooks/useFindUsersByRole';
import { userColumns } from 'modules/security/roles/constants/role-user.columns';
import { RoleUserListToolbar } from 'modules/security/roles/components/RoleUserListToolbar';
import { useFindProvidersByRole } from 'modules/security/roles/hooks/useFindProvidersByRole';
import RoleProvidersListToolbar from '../RoleUserListToolbar/RoleProvidersListToolbar';

type RoleUsersListProps = {
  roleId: string;
};

const RoleProvidersList = ({ roleId }: RoleUsersListProps) => {
  const { isLoading, error, data } = useFindProvidersByRole(roleId);
  return (
    <Box>
      <RoleProvidersListToolbar roleId={roleId} />
      <Table columns={userColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};

export default memo(RoleProvidersList);
