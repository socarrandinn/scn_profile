import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindStores } from 'modules/inventory/store/hooks/useFindStores';
import { storeColumns } from 'modules/inventory/store/constants/store.columns';
import { StoreListToolbar } from 'modules/inventory/store/components/StoreListToolbar';

const StoreListContainer = () => {
  const { isLoading, error, data } = useFindStores();
  return (
    <Box>
      <StoreListToolbar />
      <Table
        columns={storeColumns}
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
