import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import UserEditModal from './UserEditModal';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';
import { useFindUserProviderTable } from '../hooks/useFindUsersTable';
import { UserProviderListToolbar } from '../components/UserProviderListToolbar';

const UserProviderListContainer = () => {
  const { isLoading, error, data } = useFindUserProviderTable();
  return (
    <Box>
      <UserTabsFilter />
      <UserProviderListToolbar />
      <Table columns={userProviderColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
      <UserEditModal />
    </Box>
  );
};

export default memo(UserProviderListContainer);
