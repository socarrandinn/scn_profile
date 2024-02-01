import React, { memo } from 'react';

import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';

import { userColumns } from 'modules/security/users/constants/user.columns';
import { useFindUsersTable } from 'modules/security/users/hooks/useFindUsersTable';
import { SupplierUsersToolbar } from 'modules/inventory/provider/supplier/components/SupplierUsersToolbar';

const LogisticUserListContainer = () => {
  const { isLoading, error, data } = useFindUsersTable();

  return (
    <Box>
      <SupplierUsersToolbar />
      <Table
        columns={userColumns}
        data={data?.data} // todo: Filter users by its provider
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(LogisticUserListContainer);
