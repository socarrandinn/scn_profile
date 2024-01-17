import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { memo } from 'react';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { logisticTabs } from 'modules/inventory/provider/logistics/constants/tabs.logistic.details';
import { LogisticDeleteButton, LogisticEditButton } from 'modules/inventory/provider/logistics/components/LogisticDetailActions';

const ProviderLogisticHeaderDetails = () => {
  const { isLoading, error, logistic, logisticId } = useLogisticsDetailContext();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={logistic?.name || ''}
      subtitle={logistic?.contacts?.mainEmail || ''}
      logo={logistic?.avatar?.url}
      actions={<Actions />}
    >
      <RouterTab
        tabs={logisticTabs}
        prefix={`/inventory/settings/logistics/${logisticId as string}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProviderLogisticHeaderDetails);

export const Actions = () => {
  return (
    <Box gap={1} display={'flex'}>
      <LogisticEditButton />
      <LogisticDeleteButton />
    </Box>
  );
};
