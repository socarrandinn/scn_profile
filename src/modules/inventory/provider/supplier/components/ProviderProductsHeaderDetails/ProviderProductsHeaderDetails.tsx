import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { memo } from 'react';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import { Box, Button } from '@mui/material';
import ProviderProductsHeaderDetailSkeleton from './ProviderProductsHeaderDetailSkeleton';
import { RouterTab } from '@dfl/react-security';
import { supplierTabs } from '../../constants/tabs.supplier.details';

const ProviderProductsHeaderDetails = () => {
  const { isLoading, error, providerProducts, providerProductsId } = ProviderProductsDetail();

  if (isLoading || error) return <ProviderProductsHeaderDetailSkeleton />;

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
        translationNs={'account'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProviderProductsHeaderDetails);

export const Actions = () => {
  return (
    <Box gap={1} display={'flex'}>
      <Button variant='outlined'>Action 1</Button>
      <Button variant='outlined'>Action 2</Button>
      <Button variant='outlined'>Action 3</Button>
    </Box>
  );
};
