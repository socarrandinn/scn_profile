import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { Box } from '@mui/material';
import { useFindProductBySupplierAndStore } from 'modules/inventory/provider/supplier/hooks/useFindProductBySupplierandStore';
import { ProviderWarehouseContextProvider } from 'modules/inventory/provider/supplier/context/WarehouseProvider';

type SupplierInventoryTabPanelProps = {
  tab: {
    label: string;
    value: string;
  };
};

const SupplierInventoryTabPanel = ({ tab }: SupplierInventoryTabPanelProps) => {
  const { value: warehouseId } = tab;

  return (
    <ProviderWarehouseContextProvider warehouseId={warehouseId}>
      <TableProvider id={'warehouse-product'} filters={supplierStoreProductFilters}>
        <ProductStoreListToolbarContainer warehouseId={warehouseId} />
      </TableProvider>
    </ProviderWarehouseContextProvider>
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
