import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { useFindLogisticDistributionCenters } from '../hooks/useFindLogisticDistributionCenters';
import LogisticProductsToolbar from '../components/LogisticProductsToolbar/LogisticProductsToolbar';
import { distributionCentersColumns } from 'modules/inventory/distribution-centers/constants';

const LogisticDistributionCentersListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data } = useFindLogisticDistributionCenters(logisticId);

  return (
    <Box>
      <LogisticProductsToolbar />
      <Table
        columns={distributionCentersColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(LogisticDistributionCentersListContainer);
