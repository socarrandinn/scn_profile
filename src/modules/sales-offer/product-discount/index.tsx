import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales-offer/product-discount/routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const ProductDiscountModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings/product_discounts'} memory />
    </Suspense>
  );
};

export default ProductDiscountModule;
