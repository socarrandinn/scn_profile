import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindSupplierProducts } from '../hooks/useFindSupplierProducts';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';
import { SupplierProductToolbar } from '../components/SupplierProductToolbar';
import { supplierProductTabColumns } from 'modules/inventory/product/constants';

const SupplierProductListContainer = () => {
  const { providerProductsId } = useProviderProductsDetail();
  const { isLoading, error, data } = useFindSupplierProducts(providerProductsId);
  return (
    <Box>
      <SupplierProductToolbar />
      <Table
        columns={supplierProductTabColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(SupplierProductListContainer);
