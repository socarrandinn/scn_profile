import { memo } from 'react';
import { Stack } from '@mui/material';
import { TableProvider } from '@dfl/mui-admin-layout';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailInventoryListContainer from './ProductTabs/ProductDetailInventoryListContainer';
import { FormPaper } from 'modules/common/components/FormPaper';

const SupplierInventoryContainer = () => {
  return (
    <ProductDetailProvider>
      <Stack mb={{ xs: 2, md: 4 }}>
        <FormPaper nm>
          <TableProvider id={'inventoryProduct'}>
            <ProductDetailInventoryListContainer />
          </TableProvider>
        </FormPaper>
      </Stack>
    </ProductDetailProvider>
  );
};

export default memo(SupplierInventoryContainer);
