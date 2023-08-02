import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProducts } from 'modules/store/product/hooks/useFindProducts';
import { productColumns } from 'modules/store/product/constants/product.columns';
import { ProductListToolbar } from 'modules/store/product/components/ProductListToolbar';

const ProductListContainer = () => {
  const { isLoading, error, data } = useFindProducts();
  return (
    <Box>
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
