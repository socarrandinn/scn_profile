import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { warehouseProductColumns } from 'modules/inventory/warehouse/constants/warehouse-products.columns';
import { useFindDistributionCenterProducts } from '../hooks/useFindDistributionCenterProducts';

const DistributionCenterProductListContainer = () => {
  const { isLoading, error, data } = useFindDistributionCenterProducts();
  return (
    <Box>
      <Table
        columns={warehouseProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(DistributionCenterProductListContainer);
