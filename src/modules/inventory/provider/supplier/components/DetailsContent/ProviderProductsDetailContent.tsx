import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import SupplierRoutes from 'modules/inventory/provider/supplier/routes/supplier-tabs.router';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';

const ProviderProductsDetailContent = () => {
  const { providerProductsId, isLoading } = useProviderProductsDetail();
  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader
        routes={SupplierRoutes}
        notfoundRedirect={`/inventory/settings/suppliers/${providerProductsId as string}/general`}
      />
    </ConditionContainer>
  );
};
export default memo(ProviderProductsDetailContent);
