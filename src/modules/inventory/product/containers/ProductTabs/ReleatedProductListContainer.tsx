import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProducts } from 'modules/inventory/product/hooks/useFindProducts';
import { productReletedColumns } from 'modules/inventory/product/constants/releated-product.colums';

const ReleatedProductListContainer = () => {
  const { isLoading, error, data } = useFindProducts();

  return (
    <Box>
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
