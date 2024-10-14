import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { ProductStoreListToolbar } from 'modules/inventory/warehouse/components/ProductStoreListToolbar';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { Box } from '@mui/material';
import { StoreContextProvider, useStoreContext } from 'modules/inventory/provider/supplier/context/StoreProvider';
import { useFindProductByStore } from 'modules/inventory/product/hooks/useFindProductByStore';

type SupplierInventoryTabPanelProps = {
  tab: {
    label: string;
    value: string;
  };
};

const LogisticInventoryTabPanel = ({ tab }: SupplierInventoryTabPanelProps) => {
  const { value: warehouseId } = tab;

  return (
    <StoreContextProvider warehouseId={warehouseId}>
      <TableProvider id={'product'} filters={supplierStoreProductFilters}>
        <ProductStoreListToolbarContainer />
      </TableProvider>
    </StoreContextProvider>
  );
};

export default memo(LogisticInventoryTabPanel);

export const ProductStoreListToolbarContainer = () => {
  const { warehouseId } = useStoreContext();
  const { data, isLoading, error } = useFindProductByStore(warehouseId);

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
