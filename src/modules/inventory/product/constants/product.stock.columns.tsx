import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { ProductStockRowActions } from '../components/ProductStockRowActions';

const StockRowActions = ({ record }: any) => {
  const { warehouseId } = useWarehouseDetail();
  return <ProductStockRowActions record={record} warehouse={warehouseId} />;
};

export const stockColumnAction = {
  field: 'actions',
  sortable: false,
  headerName: 'common:actions',
  permissions: 'PRODUCT_STOCK',
  disablePadding: true,
  component: StockRowActions
};
