import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { storeVisibilityColumn } from 'modules/inventory/warehouse/constants/store.columns';
import ProductInventoryStoreUpdate from 'modules/inventory/product/components/ProductInventoryStoreUpdate/ProductInventoryStoreUpdate';
import {
  ProductInventoryStockColumn,
  ProductInventoryAvailableColumn,
  ProductInventoryReservationColumn,
} from 'modules/inventory/product/components/ProductAvidableColumn';
import { IStore } from 'modules/inventory/warehouse/interfaces';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';

export const productNameColumn: HeadCell = {
  field: 'name',
  headerName: 'product:section.inventory.warehouse',
  renderCell: (name: string, store: IStore) => (
    <AvatarNameCell link={`/inventory/warehouses/${store._id as string}/general`} name={name} hideImage />
  ),
};

export const productStoreAreaColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'product:section.inventory.warehouseArea',
  renderCell: (name: string, store: IStore) => (
    <AvatarNameCell link={`/inventory/settings/categories/${store._id as string}/subcategories`} name={name} hideImage />
  ),
};

export const productAvailableColumn: HeadCell = {
  field: 'stock',
  headerName: 'product:section.inventory.available',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
  component: ProductInventoryAvailableColumn,
};
export const productReservationColumn: HeadCell = {
  field: 'reservation',
  headerName: 'product:section.inventory.reservation',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
  component: ProductInventoryReservationColumn,
};

export const productStockColumn: HeadCell = {
  field: 'stock',
  headerName: 'product:section.inventory.stock',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
  component: ProductInventoryStockColumn,
};

export const productUpdateInventory: HeadCell = {
  field: 'actions',
  headerName: 'common:actions',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
  component: ProductInventoryStoreUpdate,
};

export const inventoryProductColumns: HeadCell[] = [
  productNameColumn,
  productStoreAreaColumn,
  productAvailableColumn,
  productReservationColumn,
  productStockColumn,
  storeVisibilityColumn,
  productUpdateInventory,
];
