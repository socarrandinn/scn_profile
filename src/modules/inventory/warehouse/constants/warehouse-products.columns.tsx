import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import {
  productNameColumn,
  productCodeColumn,
  categoryNameColumn,
  createdAtProductColumn,
} from 'modules/inventory/product/constants/product.columns';
import { useWarehouseDetail } from '../context/WarehouseContext';
import { ProductStockRowActions } from 'modules/inventory/product-stock/components/ProductStockRowActions';

import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { IStock } from '../interfaces';
import { WarehouseStockVisiblePicker } from 'modules/inventory/product-stock/components/StockVisiblePicker';

const StockRowActions = ({ record }: any) => {
  const { warehouseId } = useWarehouseDetail();
  return <ProductStockRowActions record={record} warehouse={warehouseId} />;
};

export const stockColumnAction = {
  field: 'actions',
  sortable: false,
  headerName: 'common:actions',
  permissions: [STOCK_PERMISSIONS.WRITE],
  disablePadding: true,
  component: StockRowActions,
};

export const productPriceColumn: HeadCell = {
  field: 'price',
  headerName: 'product:fields.price',
  cellClassName: 'font-bold',
  type: CellType.CURRENCY,
  permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
};

export const productCostPriceColumn: HeadCell = {
  field: 'cost',
  headerName: 'product:fields.cost',
  type: CellType.CURRENCY,
  permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
};

export const warehouseStockVisibilityColumn: HeadCell<IStock> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'warehouse:fields.visibility',
  component: WarehouseStockVisiblePicker,
};

export const productAvailabilityColumn: HeadCell = {
  field: 'available',
  headerName: 'product:stock.stock',
  type: CellType.NUMBER,
  permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
  align: CellAlign.CENTER,
};

export const warehouseProductColumns: Array<HeadCell<any>> = [
  productNameColumn,
  productCodeColumn,
  warehouseStockVisibilityColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryNameColumn,
  productAvailabilityColumn,
  createdAtProductColumn,
  stockColumnAction,
];
