import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';
import { useWarehouseDetail } from '../context/WarehouseContext';
import { useFindUsersByWarehouse } from '../hooks/useFindUsersByWarehouse';
import { WarehouseUserListToolbar } from '../components/WarehouseUserListToolbar';

const WarehouseUserListContainer = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isLoading, error, data } = useFindUsersByWarehouse(warehouseId);
  return (
    <Box>
      <UserTabsFilter />
      <WarehouseUserListToolbar />
      <Table
        columns={userSystemColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(WarehouseUserListContainer);
