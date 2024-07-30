import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/product/routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const ProductModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/inventory/product'} memory />
    </Suspense>
  );
};

export default ProductModule;
