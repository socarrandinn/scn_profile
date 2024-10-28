import { memo, Suspense } from 'react';
import { ProviderProductsDetailProvider } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import ProviderProductsDetailContent from 'modules/inventory/provider/supplier/components/DetailsContent/ProviderProductsDetailContent';
import { ProviderProductsHeaderDetails } from '../components/ProviderProductsHeaderDetails';
import { PageLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';

const SupplierDetailContainer = () => {
  return (
    <PageLayout>
      <ProviderProductsDetailProvider>
        <ProviderProductsHeaderDetails />
        <Suspense fallback={<PageLoader size='page' />}>
          <ProviderProductsDetailContent />
        </Suspense>
      </ProviderProductsDetailProvider>
    </PageLayout>
  );
};
export default memo(SupplierDetailContainer);
