import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductRates } from '../hooks/useFindProductRates';
import { useParams } from 'react-router';
import { productReviewColumns } from '../constants/product-rate.columns';
import { ProductRateListToolbar } from '../components/ProductRateListToolbar';

const ProductRateListContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindProductRates(id as string);

  return (
    <Box>
      <ProductRateListToolbar />
      <Table
        columns={productReviewColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(ProductRateListContainer);
