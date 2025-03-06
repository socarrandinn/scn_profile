import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { useFindStoresByDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindStoresByDistributionCenters';
import { DistributionCenterWarehouseListToolbar } from '../components/DistributionCenterWarehouseListToolbar';
import { distributionCenterWarehouseColumns } from 'modules/inventory/warehouse/constants';

const DistributionCentersWarehouseListContainer = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const { isLoading, error, data } = useFindStoresByDistributionCenters(distributionCenterId);

  return (
    <Box>
      <DistributionCenterWarehouseListToolbar />
      <Table
        columns={distributionCenterWarehouseColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      // select
      />
    </Box>
  );
};

export default memo(DistributionCentersWarehouseListContainer);
