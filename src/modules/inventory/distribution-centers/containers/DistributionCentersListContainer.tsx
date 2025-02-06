import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindDistributionCenters';
import { distributionCentersColumns } from 'modules/inventory/distribution-centers/constants/distribution-centers.columns';
import { DistributionCentersListToolbar } from 'modules/inventory/distribution-centers/components/DistributionCentersListToolbar';

const DistributionCentersListContainer = () => {
  const { isLoading, error, data } = useFindDistributionCenters();
  return (
    <Box>
      <DistributionCentersListToolbar />
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

export default memo(DistributionCentersListContainer);
