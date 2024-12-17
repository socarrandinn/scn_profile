import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { ProductDetailProvider } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailInventoryListContainer from './ProductTabs/ProductDetailInventoryListContainer';
import { FormPaper } from 'modules/common/components/FormPaper';

const SupplierInventoryContainer = () => {
  return (
    <ProductDetailProvider>
      <FormPaper nm sx={{ mb: 3 }}>
        <TableProvider id={'product-inventory'}>
          <ProductDetailInventoryListContainer />
        </TableProvider>
      </FormPaper>
    </ProductDetailProvider>
  );
};

export default memo(SupplierInventoryContainer);
