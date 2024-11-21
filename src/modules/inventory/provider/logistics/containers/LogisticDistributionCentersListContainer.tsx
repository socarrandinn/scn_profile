import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { useFindLogisticDistributionCenters } from '../hooks/useFindLogisticDistributionCenters';
import { logisticDistributionCentersColumns } from 'modules/inventory/distribution-centers/constants';
import { LogisticDistributionCenterToolbar } from '../components/LogisticDistributionCenterToolbar';

const LogisticDistributionCentersListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data } = useFindLogisticDistributionCenters(logisticId);

  return (
    <Box>
      <LogisticDistributionCenterToolbar />
      <Table
        columns={logisticDistributionCentersColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
    </Box>
  );
};

export default memo(LogisticDistributionCentersListContainer);
