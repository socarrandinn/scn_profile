import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { storeVisibilityColumn } from 'modules/inventory/warehouse/constants/warehouse.columns';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import ProductInventoryStoreUpdate from 'modules/inventory/product-stock/components/ProductInventoryStoreUpdate/ProductInventoryStoreUpdate';
import { ProductWarehouseArea } from '../components/ProductWarehouseArea';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';

export const productNameColumn: HeadCell = {
  field: 'warehouseName',
  headerName: 'product:section.inventory.warehouse',
  renderCell: (warehouseName: string, data: any) => (
    <AvatarNameCell
      link={`/inventory/warehouses/${data?.warehouse as string}/general`}
      name={warehouseName}
      hideImage
      permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW]}
    />
  ),
};

export const productWarehouseAreaColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'product:section.inventory.warehouseArea',
  component: ProductWarehouseArea,
};

export const productAvailableColumn: HeadCell = {
  field: 'available',
  headerName: 'product:section.inventory.available',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
};
export const productReservationColumn: HeadCell = {
  field: 'reservation',
  headerName: 'product:section.inventory.reservation',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
};

export const productStockColumn: HeadCell = {
  field: 'stock',
  headerName: 'product:section.inventory.stock',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
};

export const productStockActionColumn: HeadCell = {
  field: 'actions',
  headerName: 'common:actions',
  width: 150,
  align: CellAlign.CENTER,
  sortable: false,
  component: ProductInventoryStoreUpdate,
  permissions: [STOCK_PERMISSIONS.WRITE],
};

export const inventoryProductColumns: HeadCell[] = [
  productNameColumn,
  productWarehouseAreaColumn,
  productAvailableColumn,
  productReservationColumn,
  productStockColumn,
  storeVisibilityColumn,
  productStockActionColumn,
];
