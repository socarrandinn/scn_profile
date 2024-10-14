import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductsByStore } from 'modules/inventory/product/hooks/useFindStoreProducts';
import { StoreProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { storeProductColumns } from 'modules/inventory/warehouse/constants/storeProducts.columns';

const StoreProductsListContainer = () => {
  const { isLoading, error, data } = useFindProductsByStore();

  return (
    <Box>
      <StoreProductListToolbar filters={undefined} total={undefined} warehouseId='' />
      <Table
        columns={storeProductColumns}
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
