import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindUserSystemTable } from 'modules/security/users/hooks/useFindUsersTable';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import UserEditModal from './UserEditModal';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';

const UserSystemListContainer = () => {
  const { isLoading, error, data } = useFindUserSystemTable();
  return (
    <Box>
      <UserTabsFilter />
      <UserListToolbar />
      <Table columns={userSystemColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
      <UserEditModal />
    </Box>
  );
};

export default memo(UserSystemListContainer);
