import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { useFindSupplierByDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindSupplierByDistributionCenters';
import { warehouseSupplierColumns } from 'modules/inventory/warehouse/constants/warehouse-supplier.columns';

const DistributionCentersProviderSupplierListContainer = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const { isLoading, error, data } = useFindSupplierByDistributionCenters(distributionCenterId);
  return (
    <Box>
     {/*  <SupplierListToolbar /> */}
      <Table
        columns={warehouseSupplierColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(DistributionCentersProviderSupplierListContainer);
