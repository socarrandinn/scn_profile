import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { ProviderUsersInviteToolbar } from 'modules/security/users-invite/components/ProviderUsersInviteToolbar';
import { useFindLogisticUsers } from 'modules/inventory/provider/logistics/hooks/useFindLogisticUsers';
import { LOGISTICS_PERMISSIONS, logisticUsersColumns } from 'modules/inventory/provider/logistics/constants';
import { memo } from 'react';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';

const LogisticUserListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data } = useFindLogisticUsers(logisticId || '');

  return (
    <Box>
      <UserTabsFilter />
      <ProviderUsersInviteToolbar permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]} />
      <Table
        columns={logisticUsersColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(LogisticUserListContainer);
