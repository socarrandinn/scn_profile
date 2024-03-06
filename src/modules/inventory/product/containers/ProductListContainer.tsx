import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProducts } from 'modules/inventory/product/hooks/useFindProducts';
import { productColumns } from 'modules/inventory/product/constants/product.columns';
import { ProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { ProductTabsFilter } from 'modules/inventory/product/components/ProductTabsFilter';

const ProductListContainer = () => {
  const { isLoading, error, data } = useFindProducts();

  return (
    <Box>
      <ProductTabsFilter />
      <ProductListToolbar />
      <Table
        columns={productColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(ProductListContainer);
