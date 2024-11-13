import { useFindStoreProductStock } from 'modules/inventory/product/hooks/useFindStoreProductStock';
import { Span } from '@dfl/mui-react-common';
import { useProviderWarehouseContext } from 'modules/inventory/provider/supplier/context/WarehouseProvider';

const ProductProviderAvailability = (rowId: string) => {
  const { warehouseId } = useProviderWarehouseContext();
  const { data, isLoading } = useFindStoreProductStock(rowId, warehouseId);
  if (isLoading) return <>Loading...</>;

  return <Span>{data.data.available}</Span>;
};

export default ProductProviderAvailability;
