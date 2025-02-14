import { memo, useMemo } from 'react';
import { HeadCell, Table, TableProvider } from '@dfl/mui-admin-layout';
import { ProductStoreListToolbar } from 'modules/inventory/warehouse/components/ProductStoreListToolbar';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { Box } from '@mui/material';
import {
  ProviderWarehouseContextProvider,
  useProviderWarehouseContext,
} from 'modules/inventory/provider/supplier/context/WarehouseProvider';
import { useFindInventoryStockByWarehouse } from 'modules/inventory/warehouse/hooks/useFindInventoryStockByWarehouse';

type SupplierInventoryTabPanelProps = {
  tab: {
    label: string;
    value: string;
  };
};

const LogisticInventoryTabPanel = ({ tab }: SupplierInventoryTabPanelProps) => {
  const { value: warehouseId } = tab;

  return (
    <ProviderWarehouseContextProvider warehouseId={warehouseId}>
      <TableProvider id={'product'} filters={supplierStoreProductFilters}>
        <ProductStoreListToolbarContainer />
      </TableProvider>
    </ProviderWarehouseContextProvider>
  );
};

export default memo(LogisticInventoryTabPanel);

export const ProductStoreListToolbarContainer = () => {
  const { warehouseId } = useProviderWarehouseContext();

  const { data, isLoading, error } = useFindInventoryStockByWarehouse(warehouseId);
  const columns: HeadCell[] = useMemo(() => supplierInventoryStoreProductColumns(warehouseId), [warehouseId]);

  return (
    <Box>
      <ProductStoreListToolbar />
      <Table
        columns={columns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      // select
      />
    </Box>
  );
};
