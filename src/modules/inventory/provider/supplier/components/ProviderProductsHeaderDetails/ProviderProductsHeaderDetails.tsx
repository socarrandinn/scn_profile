import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import { supplierTabs } from 'modules/inventory/provider/supplier/constants/tabs.supplier.details';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import {
  SupplierDeleteButton,
  SupplierEditButton,
} from 'modules/inventory/provider/supplier/components/SupplierDetailActions';
import { SUPPLIER } from 'modules/inventory/constants/entities.style';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, providerProducts, providerProductsId } = useProviderProductsDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={providerProducts?.name || ''}
      subtitle={providerProducts?.contacts?.mainEmail || ''}
      logo={providerProducts?.avatar?.url}
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
  return (
    <Box gap={1} display={'flex'}>
      <SupplierEditButton />
      <SupplierDeleteButton />
    </Box>
  );
};
