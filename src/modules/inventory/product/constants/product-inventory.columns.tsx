import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { storeVisibilityColumn } from 'modules/inventory/warehouse/constants/warehouse.columns';
import {
  ProductInventoryStockColumn,
  ProductInventoryAvailableColumn,
  ProductInventoryReservationColumn,
} from 'modules/inventory/product/components/ProductAvidableColumn';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import ProductInventoryStoreUpdate from 'modules/inventory/product-stock/components/ProductInventoryStoreUpdate/ProductInventoryStoreUpdate';
import { ProductWarehouseArea } from '../components/ProductWarehouseArea';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';

export const productNameColumn: HeadCell = {
  field: 'name',
  headerName: 'product:section.inventory.warehouse',
  renderCell: (name: string, warehouse: IWarehouse) => (
    <AvatarNameCell
      link={`/inventory/warehouses/${warehouse?._id as string}/general`}
      name={name}
      hideImage
      permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW]}
    />
  ),
};

export const productWarehouseAreaColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'product:section.inventory.warehouseArea',
  component: ProductWarehouseArea
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
  permissions: [STOCK_PERMISSIONS.WRITE, STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_VIEW],
};

export const inventoryProductColumns: HeadCell[] = [
  productNameColumn,
  productWarehouseAreaColumn,
  productAvailableColumn,
  productReservationColumn,
  productStockColumn,
  storeVisibilityColumn,
  productUpdateInventory,
];
