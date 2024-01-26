import { memo } from 'react';
import { ProviderProductsDetailProvider } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import ProviderProductsDetailContent from 'modules/inventory/provider/supplier/components/DetailsContent/ProviderProductsDetailContent';
import { ProviderProductsHeaderDetails } from '../components/ProviderProductsHeaderDetails';
import { PageLayout } from 'layouts/index';

const SupplierDetailContainer = () => {
  return (
    <ProviderProductsDetailProvider>
      <ProviderProductsHeaderDetails />
      <PageLayout>
        <ProviderProductsDetailContent />
      </PageLayout>
    </ProviderProductsDetailProvider>
  );
};
export default memo(SupplierDetailContainer);
