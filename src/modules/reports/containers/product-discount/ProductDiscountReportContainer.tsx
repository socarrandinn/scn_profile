import { Stack } from '@mui/material';
import ProductDiscountHistogram from 'modules/reports/components/productDiscount/ProductDiscountHistogram';
import ProductDiscountSummary from 'modules/reports/components/productDiscount/ProductDiscountSummary';

const ProductDiscountReportContainer = () => {
  return (
    <Stack gap={{ xs: 2, md: 4 }}>
      <ProductDiscountSummary />
      <ProductDiscountHistogram />
    </Stack>
  );
};

export default ProductDiscountReportContainer;
