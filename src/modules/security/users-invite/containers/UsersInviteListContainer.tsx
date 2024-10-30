import { memo, ReactNode } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { usersInviteColumns } from 'modules/security/users-invite/constants/users-invite.columns';
import { UsersInviteListToolbar } from 'modules/security/users-invite/components/UsersInviteListToolbar';

type Props = {
  Toolbar?: ReactNode;
  useHook?: any;
  entityId?: string;
};
const UsersInviteListContainer = ({ Toolbar, useHook = useFindUsersInvites, entityId }: Props) => {
  const { isLoading, error, data } = useHook(entityId ?? undefined);
  const toolbar = Toolbar || <UsersInviteListToolbar />;
  return (
    <Box>
      <TabsFilter translation={'users'} defaultView={'all'} />
      {toolbar}
      <Table
        columns={usersInviteColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
    </Box>
  );
};

export default memo(UsersInviteListContainer);
