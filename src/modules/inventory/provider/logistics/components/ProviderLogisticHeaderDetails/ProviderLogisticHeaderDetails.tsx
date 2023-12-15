import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { memo } from 'react';
import { Box, Button } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { LogistcisDetail } from '../../context/LogisticDetail';
import { logisticTabs } from '../../constants/tabs.logistic.details';

const ProviderLogisticHeaderDetails = () => {
  const { isLoading, error, logistic, logisticId } = LogistcisDetail();

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
      <Button variant='outlined'>Action 1</Button>
      <Button variant='outlined'>Action 2</Button>
      <Button variant='outlined'>Action 3</Button>
    </Box>
  );
};
