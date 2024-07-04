import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductDiscounts } from 'modules/sales-offer/product-discount/hooks/useFindProductDiscounts';
import { productDiscountColumns } from 'modules/sales-offer/product-discount/constants/product-discount.columns';
import { ProductDiscountListToolbar } from 'modules/sales-offer/product-discount/components/ProductDiscountListToolbar';
import ProductDiscountEditModal from 'modules/sales-offer/product-discount/containers/ProductDiscountEditModal';

const ProductDiscountListContainer = () => {
  const { isLoading, error, data } = useFindProductDiscounts();
  return (
    <Box>
      <ProductDiscountListToolbar />
      <Table
        columns={productDiscountColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ProductDiscountEditModal />
    </Box>
  );
};

export default memo(ProductDiscountListContainer);
