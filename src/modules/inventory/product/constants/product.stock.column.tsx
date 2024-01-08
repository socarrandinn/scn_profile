import { ProductStockRowActions } from '../components/ProductStockRowActions';

const StockRowActions = ({ record }: any) => {
  // const { storeId } = useStoreDetail();
  return <ProductStockRowActions record={record} store={'storeId'} />;
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
