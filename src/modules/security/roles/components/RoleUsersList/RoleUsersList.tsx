import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersByRole } from 'modules/security/users/hooks/useFindUsersByRole';
import { RoleUserListToolbar } from 'modules/security/roles/components/RoleUserListToolbar';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';

type RoleUsersListProps = {
  roleId: string;
};

const RoleUsersList = ({ roleId }: RoleUsersListProps) => {
  const { isLoading, error, data } = useFindUsersByRole(roleId);
  return (
    <Box>
      <RoleUserListToolbar roleId={roleId} />
      <Table columns={userSystemColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};

export default memo(RoleUsersList);
