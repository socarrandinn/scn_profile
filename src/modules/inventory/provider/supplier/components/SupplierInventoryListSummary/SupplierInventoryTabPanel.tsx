import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
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
  const { value: warehouseId } = tab;

  return (
    <StoreContextProvider warehouseId={warehouseId}>
      <TableProvider id={'store-product'} filters={supplierStoreProductFilters}>
        <ProductStoreListToolbarContainer warehouseId={warehouseId} />
      </TableProvider>
    </StoreContextProvider>
  );
};

export default memo(SupplierInventoryTabPanel);

export const ProductStoreListToolbarContainer = ({ warehouseId }: { warehouseId: string }) => {
  const { data, isLoading, error } = useFindProductBySupplierAndStore();

  return (
    <Box>
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
