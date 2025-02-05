import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { Box } from '@mui/material';
import { ProviderWarehouseContextProvider } from 'modules/inventory/provider/supplier/context/WarehouseProvider';
import { useFindInventoryStockByWarehouse } from 'modules/inventory/warehouse/hooks/useFindInventoryStockByWarehouse';
import { useParams } from 'react-router';

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
  const { id: providerId } = useParams();
  const { data, isLoading, error } = useFindInventoryStockByWarehouse(warehouseId, providerId);

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
