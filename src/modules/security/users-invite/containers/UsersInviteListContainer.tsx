import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { usersInviteColumns } from 'modules/security/users-invite/constants/users-invite.columns';
import { ChildrenProps } from '@dfl/mui-react-common';

type Props = {
  useHook?: any;
  entityId?: string;
};
const UsersInviteListContainer = ({ useHook = useFindUsersInvites, entityId, children }: Props & ChildrenProps) => {
  const { isLoading, error, data } = useHook(entityId ?? undefined);

  return (
    <Box>
      <TabsFilter translation={'users'} defaultView={'all'} />
      {children}
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
