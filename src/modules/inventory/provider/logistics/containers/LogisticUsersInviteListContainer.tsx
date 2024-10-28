import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProviderUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { usersInviteColumns } from 'modules/security/users-invite/constants/users-invite.columns';
import UsersInviteEditModal from 'modules/security/users-invite/containers/UsersInviteEditModal';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { LogisticUsersToolbar } from '../components/LogisticUsersToolbar';

const LogisticUsersInviteListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data } = useFindProviderUsersInvites(logisticId);
  return (
    <Box>
      <TabsFilter translation={'users'} defaultView={'all'} />
      <LogisticUsersToolbar />
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

export default memo(LogisticUsersInviteListContainer);
