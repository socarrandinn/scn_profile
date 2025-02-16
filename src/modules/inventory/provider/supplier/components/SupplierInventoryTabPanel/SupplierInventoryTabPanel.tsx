import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { ProviderWarehouseContextProvider } from 'modules/inventory/provider/supplier/context/WarehouseProvider';
import SupplierInventoryListContainer from '../../containers/SupplierInventoryListContainer';

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
        <SupplierInventoryListContainer warehouseId={warehouseId} />
      </TableProvider>
    </ProviderWarehouseContextProvider>
  );
};

export default memo(SupplierInventoryTabPanel);
