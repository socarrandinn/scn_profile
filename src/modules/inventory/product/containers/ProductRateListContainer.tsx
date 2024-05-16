import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useParams } from 'react-router';
import { productReviewColumns } from '../constants/product-rate.columns';
import { ProductRateListToolbar } from '../components/ProductRateListToolbar';
import { useFindReviewsByEntity } from 'modules/crm/reviews/hooks/useFindReviewsByEntity';
import ReviewsReportCountTypeEditModal from 'modules/crm/reviews/containers/ReviewsReportCountTypeEditModal';

const ProductRateListContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindReviewsByEntity(id as string);

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
      <ReviewsReportCountTypeEditModal />
    </Box>
  );
};

export default memo(ProductRateListContainer);
