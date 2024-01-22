import { memo } from 'react';
import { Stack } from '@mui/material';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailInventoryListContainer from './ProductTabs/ProductDetailInventoryListContainer';
import { FormPaper } from 'modules/common/components/FormPaper';

const SupplierInventoryContainer = () => {
  return (
    <ProductDetailProvider>
      <Stack mb={{ xs: 2, md: 4 }}>
        <FormPaper>
          <ProductDetailInventoryListContainer />
        </FormPaper>
      </Stack>
    </ProductDetailProvider>
  );
};

export default memo(SupplierInventoryContainer);
