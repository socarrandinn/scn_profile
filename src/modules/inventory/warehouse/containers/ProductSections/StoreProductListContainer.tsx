import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductsByStore } from 'modules/inventory/product/hooks/useFindStoreProducts';
import { StoreProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { warehouseProductColumns } from 'modules/inventory/warehouse/constants/warehouse-products.columns';

const StoreProductsListContainer = () => {
  const { isLoading, error, data } = useFindProductsByStore();
  return (
    <Box>
      <StoreProductListToolbar filters={undefined} total={undefined} />
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

export default memo(StoreProductsListContainer);
