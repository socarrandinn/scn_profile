import { ProductStockRowActions } from '../../product-stock/components/ProductStockRowActions';
import { useProviderWarehouseContext } from 'modules/inventory/provider/supplier/context/WarehouseProvider';

const StockRowActions = ({ record }: any) => {
  const { warehouseId } = useProviderWarehouseContext();
  return <ProductStockRowActions record={record} warehouse={warehouseId} />;
};

export const stockColumnAction = {
  field: 'actions',
  sortable: false,
  headerName: 'common:actions',
  permissions: 'PRODUCT_STOCK',
  disablePadding: true,
  component: StockRowActions,
};
