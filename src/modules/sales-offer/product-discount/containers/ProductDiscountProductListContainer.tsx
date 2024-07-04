import { Table } from '@dfl/mui-admin-layout';
import { Box } from '@mui/material';
import LocalStorageProvider from 'contexts/LocalStorageProvider';
import { useActorSecurity } from 'hooks/useActorSecurity';
import { ProductTabsFilter } from 'modules/inventory/product/components/ProductTabsFilter';
import { memo } from 'react';
import { ProductDiscountDetailListToolbar } from '../components/ProductDiscountDetailListToolbar';
import { productDiscountDetailColumns, providerProductDiscountDetailColumns } from '../constants';
import { useProductDiscountDetails } from '../contexts/ProductDiscountDetails';
import { useFindProductDiscountProducts } from '../hooks/useFindProductDiscountProducts';

const ProductDiscountProductListContainer = () => {
  const { isProvider } = useActorSecurity();
  const { discount, isLoading: isLoadingDiscount } = useProductDiscountDetails();
  const { isLoading, error, data } = useFindProductDiscountProducts(discount?._id);
  
  return (
    <Box>
      <ProductTabsFilter />
      <LocalStorageProvider>
        <ProductDiscountDetailListToolbar />
      </LocalStorageProvider>
      <Table
        columns={isProvider ? providerProductDiscountDetailColumns : productDiscountDetailColumns}
        data={data?.data || []}
        total={data?.total}
        isLoading={isLoadingDiscount || isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(ProductDiscountProductListContainer);
