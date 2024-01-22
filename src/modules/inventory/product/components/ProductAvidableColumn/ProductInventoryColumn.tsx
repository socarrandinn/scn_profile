import { Typography } from '@mui/material';
import { useProductDetail } from '../../contexts/ProductDetail';
import { useFindProductStockByStore } from '../../hooks/useFindProductStockByStore';

type InventoryColumnProps = {
  rowId: string;
};
const ProductInventoryColumn = ({ rowId }: InventoryColumnProps) => {
  const { id } = useProductDetail();
  const { data, isLoading } = useFindProductStockByStore(id, rowId);
  if (isLoading) return <>...</>;
  return <Typography>{data.data.available}</Typography>;
};

export default ProductInventoryColumn;
