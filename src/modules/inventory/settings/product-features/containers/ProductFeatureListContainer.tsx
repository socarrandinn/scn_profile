import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductFeatures } from '../hooks/useFindProductFeatures';
import { ProductFeatureListToolbar } from '../components/ProductFeatureListToolbar';
import ProductFeatureEditModal from './ProductFeatureEditModal';
import { productFeatureColumns } from '../constants/product-feature.columns';

const ProductFeatureListContainer = () => {
  const { isLoading, error, data } = useFindProductFeatures();
  return (
    <Box>
      <ProductFeatureListToolbar />
      <Table
        columns={productFeatureColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
      <ProductFeatureEditModal />
    </Box>
  );
};

export default memo(ProductFeatureListContainer);
