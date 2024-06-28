import { Paper } from '@mui/material';
import { memo } from 'react';
import ProductDiscountDetailsHeaderContent from './ProductDiscountDetailsHeaderContent';

const ProductDiscountDetailsHeader = () => {

  return (
    <Paper
      sx={{
        paddingX: {
          xs: 1,
          md: 4,
        },
        paddingY: {
          xs: 1,
          md: 3,
        },
      }}
    >
      <ProductDiscountDetailsHeaderContent />
    </Paper>
  );
};

export default memo(ProductDiscountDetailsHeader);
