import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByStore } from 'modules/inventory/product/hooks/useFindProductStockByStore';

type InventoryColumnProps = {
  rowId: string;
};
const ProductInventoryStockColumn = ({ rowId }: InventoryColumnProps) => {
  const { id } = useProductDetail();
  const { data, isLoading } = useFindProductStockByStore(id, rowId);
  if (isLoading) return <>...</>;
  return data.data.stock;
};

export default ProductInventoryStockColumn;
