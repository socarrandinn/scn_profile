import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { usersInviteColumns } from 'modules/security/users-invite/constants/users-invite.columns';
import { UsersInviteListToolbar } from 'modules/security/users-invite/components/UsersInviteListToolbar';
import UsersInviteEditModal from 'modules/security/users-invite/containers/UsersInviteEditModal';

const UsersInviteListContainer = () => {
  const { isLoading, error, data } = useFindUsersInvites();
  return (
    <Box>
      <TabsFilter translation={'users'} defaultView={'all'} />
      <UsersInviteListToolbar />
      <Table
        columns={usersInviteColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
      <UsersInviteEditModal />
    </Box>
  );
};

export default memo(UsersInviteListContainer);
