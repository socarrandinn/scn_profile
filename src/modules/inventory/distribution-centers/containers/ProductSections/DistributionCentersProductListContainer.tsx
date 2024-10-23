import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductByDistributionCenters } from 'modules/inventory/product/hooks/useFindProductByDistributionCenters';
import { StoreProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { distributionCentersProductColumns } from 'modules/inventory/distribution-centers/constants/distribution-centers-products.columns';

const DistributionCentersProductListContainer = () => {
  const { isLoading, error, data } = useFindProductByDistributionCenters();

  return (
    <Box>
      <StoreProductListToolbar filters={undefined} total={undefined} warehouseId='' />
      <Table
        columns={distributionCentersProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(DistributionCentersProductListContainer);
