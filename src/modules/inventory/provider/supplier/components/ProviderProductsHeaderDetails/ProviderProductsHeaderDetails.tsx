import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { memo } from 'react';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { Box, Button } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import { supplierTabs } from '../../constants/tabs.supplier.details';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, providerProducts, providerProductsId } = useProviderProductsDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={providerProducts?.name || ''}
      subtitle={providerProducts?.contacts?.mainEmail || ''}
      logo={providerProducts?.avatar?.url}
      actions={<Actions />}
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
      <Button variant='outlined'>Action 1</Button>
      <Button variant='outlined'>Action 2</Button>
      <Button variant='outlined'>Action 3</Button>
    </Box>
  );
};
