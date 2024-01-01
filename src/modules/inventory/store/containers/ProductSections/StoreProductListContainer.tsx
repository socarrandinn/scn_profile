import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductsByStore } from 'modules/inventory/product/hooks/useFindStoreProducts';
import { ProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { storeProductColumns } from 'modules/inventory/store/constants/storeProducts.columns';

const StoreProductsListContainer = () => {
  const { isLoading, error, data } = useFindProductsByStore();
  return (
    <Box>
      <ProductListToolbar />
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
