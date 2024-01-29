import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { storeVisibilityColumn } from 'modules/inventory/store/constants/store.columns';
import ProductInventoryStoreUpdate from 'modules/inventory/product/components/ProductInventoryStoreUpdate/ProductInventoryStoreUpdate';
import { ProductInventoryColumn } from 'modules/inventory/product/components/ProductAvidableColumn';

export const productNameColumn: HeadCell = {
  field: 'name',
  headerName: 'product:section.inventory.store',
};

export const productStockColumn: HeadCell = {
  field: 'stock',
  headerName: 'product:section.inventory.available',
  width: 150,
  align: CellAlign.CENTER,
  component: ProductInventoryColumn,
};

export const productUpdateInventory: HeadCell = {
  field: 'actions',
  headerName: 'common:actions',
  width: 150,
  align: CellAlign.CENTER,
  component: ProductInventoryStoreUpdate,
};

export const inventoryProductColumns: HeadCell[] = [
  productNameColumn,
  productStockColumn,
  storeVisibilityColumn,
  productUpdateInventory,
];
