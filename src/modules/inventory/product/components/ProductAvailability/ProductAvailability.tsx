import React from 'react';
import { useFindStoreProductStock } from 'modules/inventory/product/hooks/useFindStoreProductStock';
import { Span } from '@dfl/mui-react-common';
import { useStoreContext } from 'modules/inventory/provider/supplier/context/StoreProvider';

const ProductAvailability = (productId: string) => {
  const { storeId } = useStoreContext();
  const { data, isLoading } = useFindStoreProductStock(productId, storeId);

  if (isLoading) return <>Loading...</>;

  return <Span>{data.data.available}</Span>;
};

export default ProductAvailability;
