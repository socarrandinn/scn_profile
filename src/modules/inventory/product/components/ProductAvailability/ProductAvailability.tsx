import { useFindStoreProductStock } from 'modules/inventory/product/hooks/useFindStoreProductStock';
import { Span } from '@dfl/mui-react-common';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';

const ProductAvailability = (rowId: string) => {
  const { warehouseId } = useWarehouseDetail();
  const { data, isLoading } = useFindStoreProductStock(rowId, warehouseId);

  if (isLoading) return <>Loading...</>;

  return <Span>{data.data.available}</Span>;
};

export default ProductAvailability;
