import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindStoreAreas } from 'modules/store/settings/store-area/hooks/useFindStoreAreas';
import { storeAreaColumns } from 'modules/store/settings/store-area/constants/store-area.columns';
import { StoreAreaListToolbar } from 'modules/store/settings/store-area/components/StoreAreaListToolbar';
import StoreAreaEditModal from 'modules/store/settings/store-area/containers/StoreAreaEditModal';

const StoreAreaListContainer = () => {
  const { isLoading, error, data } = useFindStoreAreas();
  return (
    <Box>
      <StoreAreaListToolbar />
      <Table
        columns={storeAreaColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <StoreAreaEditModal />
    </Box>
  );
};

export default memo(StoreAreaListContainer);
