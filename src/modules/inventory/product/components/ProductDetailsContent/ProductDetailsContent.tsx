import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import productDetailsRoutes from 'modules/inventory/product/routes/product-details';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';

const ProductDetailsContent = () => {
  const { id, isLoading } = useProductDetail();

  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader routes={productDetailsRoutes} notfoundRedirect={`/inventory/products/${id}/general`} />
    </ConditionContainer>
  );
};

export default memo(ProductDetailsContent);
