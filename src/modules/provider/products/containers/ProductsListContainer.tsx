import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProducts } from 'modules/provider/products/hooks/useFindProducts';
import { productsColumns } from 'modules/provider/products/constants/products.columns';
import { ProductsListToolbar } from 'modules/provider/products/components/ProductsListToolbar';

const ProductsListContainer = () => {
  const {
    isLoading,
    error,
    data
  } = useFindProducts();
  return (
    <Box>
      <ProductsListToolbar />
      <Table
        columns={productsColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(ProductsListContainer);
