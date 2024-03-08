import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByStore } from 'modules/inventory/product/hooks/useFindProductStockByStore';

type InventoryColumnProps = {
  rowId: string;
};
const ProductInventoryAvailableColumn = ({ rowId }: InventoryColumnProps) => {
  const { id } = useProductDetail();
  const { data, isLoading } = useFindProductStockByStore(id, rowId);
  if (isLoading) return <>...</>;
  return data.data.available;
};

export default ProductInventoryAvailableColumn;
