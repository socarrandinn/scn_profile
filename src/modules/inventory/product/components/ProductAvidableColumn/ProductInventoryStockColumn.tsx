import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByWarehouse } from 'modules/inventory/product/hooks/useFindProductStockByWarehouse';

type InventoryColumnProps = {
  rowId: string;
};
const ProductInventoryStockColumn = ({ rowId }: InventoryColumnProps) => {
  const { id } = useProductDetail();
  const { data, isLoading } = useFindProductStockByWarehouse(id, rowId);
  if (isLoading) return <>...</>;
  return data.data.stock;
};

export default ProductInventoryStockColumn;
