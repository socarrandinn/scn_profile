import React, { memo } from 'react';

import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';

import { userColumns } from 'modules/security/users/constants/user.columns';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { LogisticUsersToolbar } from 'modules/inventory/provider/logistics/components/LogisticUsersToolbar';
import { useFindLogisticUsers } from 'modules/inventory/provider/logistics/hooks/useFindLogisticUsers';

const LogisticUserListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data } = useFindLogisticUsers(logisticId || '');

  return (
    <Box>
      <LogisticUsersToolbar />
      <Table columns={userColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};

export default memo(LogisticUserListContainer);
