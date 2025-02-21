import { Table } from '@dfl/mui-admin-layout';
import { Box } from '@mui/material';
import LocalStorageProvider from 'contexts/LocalStorageProvider';
import { ProductTabsFilter } from 'modules/inventory/product/components/ProductTabsFilter';
import { memo } from 'react';
import { ProductDiscountDetailListToolbar } from '../components/ProductDiscountDetailListToolbar';
import { productDiscountDetailColumns } from '../constants';
import { useProductDiscountDetails } from '../contexts/ProductDiscountDetails';
import { useFindProductDiscountProducts } from '../hooks/useFindProductDiscountProducts';

const ProductDiscountProductListContainer = () => {
  const { discount, isLoading: isLoadingDiscount, error: discountError } = useProductDiscountDetails();
  const { isInitialLoading: isLoading, error, data } = useFindProductDiscountProducts(discount?._id);

  return (
    <Box>
      <ProductTabsFilter />
      <LocalStorageProvider>
        <ProductDiscountDetailListToolbar />
      </LocalStorageProvider>
      <Table
        columns={productDiscountDetailColumns}
        data={data?.data || []}
        total={data?.total}
        isLoading={isLoadingDiscount || isLoading}
        error={discountError || error}
        select
      />
    </Box>
  );
};

export default memo(ProductDiscountProductListContainer);
