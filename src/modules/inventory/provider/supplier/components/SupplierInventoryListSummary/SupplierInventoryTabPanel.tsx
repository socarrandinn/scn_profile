import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { ProductStoreListToolbar } from 'modules/inventory/store/components/ProductStoreListToolbar';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { Box } from '@mui/material';
import { useFindProductBySupplierAndStore } from 'modules/inventory/provider/supplier/hooks/useFindProductBySupplierandStore';
import { StoreContextProvider } from 'modules/inventory/provider/supplier/context/StoreProvider';

type SupplierInventoryTabPanelProps = {
  tab: {
    label: string;
    value: string;
  };
};

const SupplierInventoryTabPanel = ({ tab }: SupplierInventoryTabPanelProps) => {
  const { value: storeId } = tab;

  return (
    <StoreContextProvider storeId={storeId}>
      <TableProvider id={'product'} filters={supplierStoreProductFilters}>
        <ProductStoreListToolbarContainer />
      </TableProvider>
    </StoreContextProvider>
  );
};

export default memo(SupplierInventoryTabPanel);

export const ProductStoreListToolbarContainer = () => {
  const { data, isLoading, error } = useFindProductBySupplierAndStore();

  return (
    <Box>
      <ProductStoreListToolbar />
      <Table
        columns={supplierInventoryStoreProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};
