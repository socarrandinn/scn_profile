import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByWarehouse } from 'modules/inventory/product/hooks/useFindProductStockByWarehouse';

type InventoryColumnProps = {
  rowId: string;
};
const ProductInventoryAvailableColumn = ({ rowId }: InventoryColumnProps) => {
  const { id } = useProductDetail();
  const { data, isLoading } = useFindProductStockByWarehouse(id, rowId);
  if (isLoading) return <>...</>;
  return data.data.available;
};

export default ProductInventoryAvailableColumn;
