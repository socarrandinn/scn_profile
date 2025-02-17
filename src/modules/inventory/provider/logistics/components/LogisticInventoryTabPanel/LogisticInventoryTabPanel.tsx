import { memo, useMemo } from 'react';
import { HeadCell, Table, TableProvider } from '@dfl/mui-admin-layout';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import {
  ProviderWarehouseContextProvider,
  useProviderWarehouseContext,
} from 'modules/inventory/provider/supplier/context/WarehouseProvider';
import { useFindInventoryStockByWarehouse } from 'modules/inventory/warehouse/hooks/useFindInventoryStockByWarehouse';
import { ProviderStockListToolbar } from 'modules/inventory/provider/common/components/ProviderStockListToolbar';

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
      <TableProvider id={'logistic-stock-tab'} filters={supplierStoreProductFilters}>
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
    <>
      <ProviderStockListToolbar warehouseId={warehouseId} />
      <Table
        columns={columns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </>
  );
};
