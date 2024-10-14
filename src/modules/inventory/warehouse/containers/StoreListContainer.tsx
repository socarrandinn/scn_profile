import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindStores } from 'modules/inventory/warehouse/hooks/useFindStores';
import { logisticWarehouseColumns, warehouseColumns } from 'modules/inventory/warehouse/constants/warehouse.columns';
import { StoreListToolbar } from 'modules/inventory/warehouse/components/StoreListToolbar';

type Props = {
  logisticProviderId?: string;
}

const StoreListContainer = ({ logisticProviderId }: Props) => {
  const { isLoading, error, data } = useFindStores(logisticProviderId);
  return (
    <Box>
      <StoreListToolbar logisticProviderId={logisticProviderId} />
      <Table
        columns={logisticProviderId ? logisticWarehouseColumns : warehouseColumns }
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(StoreListContainer);
