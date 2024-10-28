import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { supplierUsersTabs } from '../../constants/supplier-users-tabs.details';
import supplierUserTabRoutes from '../../routes/users-router-tabs';

const SupplierUserTabList = () => {
  const { providerProductsId } = useProviderProductsDetail();
  return (
    <PageTabPaperLayout
      prefix={`/inventory/settings/suppliers/${providerProductsId as string}/users`}
      tabs={supplierUsersTabs}
    >
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader
          routes={supplierUserTabRoutes}
          notfoundRedirect={`/inventory/settings/suppliers/${providerProductsId as string}/users/users`}
        />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default SupplierUserTabList;
