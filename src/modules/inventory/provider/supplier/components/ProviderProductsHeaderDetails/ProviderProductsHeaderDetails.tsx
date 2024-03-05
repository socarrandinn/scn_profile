import { memo, useMemo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import { supplierTabs } from 'modules/inventory/provider/supplier/constants/tabs.supplier.details';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import {
  SupplierDeleteButton,
  SupplierEditButton,
  SupplierViewAsLogisticButton,
} from 'modules/inventory/provider/supplier/components/SupplierDetailActions';
import { SUPPLIER } from 'modules/inventory/constants/entities.style';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, providerProducts, providerProductsId } = useProviderProductsDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={providerProducts?.name || ''}
      subtitle={providerProducts?.contacts?.mainEmail || ''}
      logo={providerProducts?.avatar}
      actions={<Actions />}
      entityStyle={SUPPLIER}
    >
      <RouterTab
        tabs={supplierTabs}
        prefix={`/inventory/settings/suppliers/${providerProductsId as string}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProviderManufactureHeaderDetails);

export const Actions = () => {
  const { providerProducts } = useProviderProductsDetail();
  const isLogistic = useMemo(() => providerProducts?.type === LogisticProvider, [providerProducts]);

  return (
    <Box gap={1} display={'flex'}>
      {isLogistic && <SupplierViewAsLogisticButton />}
      <SupplierEditButton />
      <SupplierDeleteButton />
    </Box>
  );
};
