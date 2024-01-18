import React from 'react';
import { useFindStoreProductStock } from 'modules/inventory/product/hooks/useFindStoreProductStock';
import { Span } from '@dfl/mui-react-common';

const ProductAvailability = (productId: string) => {
  const { data, isLoading } = useFindStoreProductStock(productId);

  if (isLoading) return <>Loading...</>;

  return <Span>{data.data.available}</Span>;
};

export default ProductAvailability;
