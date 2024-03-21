import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { productReletedColumns } from 'modules/inventory/product/constants/releated-product.colums';
import { RelatedProductsListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { useFindReleatedProducts } from 'modules/inventory/product/hooks/useFindReleatedProducts';

const ReleatedProductListContainer = () => {
  const { isLoading, error, data } = useFindReleatedProducts();

  return (
    <Box>
      <RelatedProductsListToolbar/>
      <Table
        columns={productReletedColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
};

export default memo(ReleatedProductListContainer);
