import { ProductStockRowActions } from '../components/ProductStockRowActions';
import { useStoreContext } from 'modules/inventory/provider/supplier/context/StoreProvider';

const StockRowActions = ({ record }: any) => {
  const { warehouseId } = useStoreContext();
  return <ProductStockRowActions record={record} warehouse={warehouseId} />;
};

export const stockColumnAction = {
  field: 'actions',
  sortable: false,
  headerName: 'common:actions',
  permissions: 'PRODUCT_STOCK',
  disablePadding: true,
  renderCell: (value: any, row: any) => {
    return <StockRowActions record={row} />;
  },
};
