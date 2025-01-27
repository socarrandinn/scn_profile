import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import {
  productNameColumn,
  productCodeColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  visibleProductColumn,
  createdAtProductColumn,
} from 'modules/inventory/product/constants/product.columns';
import { useWarehouseDetail } from '../context/WarehouseContext';
import { ProductStockRowActions } from 'modules/inventory/product-stock/components/ProductStockRowActions';
import { ProductAvailability } from 'modules/inventory/product/components/ProductAvailability';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';

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

export const productAvailabilityColumn: HeadCell = {
  field: '_id',
  headerName: 'product:stock.stock',
  align: CellAlign.CENTER,
  renderCell: ProductAvailability,
};

export const warehouseProductColumns: Array<HeadCell<any>> = [
  productNameColumn,
  productCodeColumn,
  visibleProductColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryNameColumn,
  productAvailabilityColumn,
  createdAtProductColumn,
  stockColumnAction,
];
