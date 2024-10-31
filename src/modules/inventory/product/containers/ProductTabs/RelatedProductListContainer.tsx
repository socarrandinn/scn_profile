import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { RelatedProductsListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { useFindRelatedProducts } from '../../hooks/useFindRelatedProducts';
import { productRelatedColumns } from '../../constants/related-product.columns';

const RelatedProductListContainer = () => {
  const { isLoading, error, data } = useFindRelatedProducts();

  return (
    <Box>
      <RelatedProductsListToolbar />
      <Table
        columns={productRelatedColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
};

export default memo(RelatedProductListContainer);
