import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByStore } from 'modules/inventory/product/hooks/useFindProductStockByStore';

type InventoryColumnProps = {
  rowId: string;
};
const ProductInventoryReservationColumn = ({ rowId }: InventoryColumnProps) => {
  const { id } = useProductDetail();
  const { data, isLoading } = useFindProductStockByStore(id, rowId);
  if (isLoading) return <>...</>;
  return data.data.reservation;
};

export default ProductInventoryReservationColumn;
