import { memo, Suspense } from 'react';
import { RouteLoader } from '@dfl/react-security';
import productDetailsRoutes from 'modules/inventory/product/routes/product-details';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ContentLoader from 'components/ContentLoader/ContentLoader';

const ProductDetailsContent = () => {
  const { id } = useProductDetail();

  return (
    <Suspense fallback={<ContentLoader />}>
      <RouteLoader routes={productDetailsRoutes} notfoundRedirect={`/inventory/products/${id}/general`} />
    </Suspense>
  );
};

export default memo(ProductDetailsContent);
