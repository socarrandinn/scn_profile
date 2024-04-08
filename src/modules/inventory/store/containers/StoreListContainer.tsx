import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindStores } from 'modules/inventory/store/hooks/useFindStores';
import { logisticStoreColumns, storeColumns } from 'modules/inventory/store/constants/store.columns';
import { StoreListToolbar } from 'modules/inventory/store/components/StoreListToolbar';

type Props = {
  logisticProviderId?: string;
}

const StoreListContainer = ({ logisticProviderId }: Props) => {
  const { isLoading, error, data } = useFindStores(logisticProviderId);
  return (
    <Box>
      <StoreListToolbar logisticProviderId={logisticProviderId} />
      <Table
        columns={logisticProviderId ? logisticStoreColumns : storeColumns }
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
