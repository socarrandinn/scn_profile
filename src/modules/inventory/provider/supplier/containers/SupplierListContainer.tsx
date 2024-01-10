import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProducts } from 'modules/inventory/provider/supplier/hooks/useFindProducts';
import { supplierColumns } from 'modules/inventory/provider/supplier/constants/supplier.columns';
import { ProductsListToolbar } from 'modules/inventory/provider/supplier/components/SupplierListToolbar';

const SupplierListContainer = () => {
  const {
    isLoading,
    error,
    data
  } = useFindProducts();
  return (
    <Box>
      <ProductsListToolbar />
      <Table
        columns={supplierColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(SupplierListContainer);
