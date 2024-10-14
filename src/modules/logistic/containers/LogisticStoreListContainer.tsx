import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { storeColumns } from 'modules/inventory/warehouse/constants/store.columns';
import { StoreListToolbar } from 'modules/inventory/warehouse/components/StoreListToolbar';
import { useFindStoresByLogistic } from 'modules/inventory/provider/logistics/hooks/useFindStoreByLogistic';
import { useProvider } from 'hooks/useProvider';

const LogisticStoreListContainer = () => {
  const { providerId } = useProvider();
  const { data, isLoading, error } = useFindStoresByLogistic(providerId);

  return (
    <Box>
      <StoreListToolbar />
      <Table columns={storeColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};

export default memo(LogisticStoreListContainer);
