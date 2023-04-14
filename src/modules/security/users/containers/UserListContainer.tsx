import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindUsersTable } from 'modules/security/users/hooks/useFindUsersTable';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userColumns } from 'modules/security/users/constants/user.columns';
import UserEditModal from './UserEditModal';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';

const UserListContainer = () => {
  const { isLoading, error, data } = useFindUsersTable();
  return (
    <Box>
      <UserTabsFilter />
      <UserListToolbar />
      <Table columns={userColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
      <UserEditModal />
    </Box>
  );
};

export default memo(UserListContainer);
