import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box, Button } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { manufacturerTabs } from '../../constants/tabs.manufacture.details';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, manufacture, manufacturerId } = ManufactureDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={manufacture?.name || ''}
      logo={manufacture?.avatar?.url}
      actions={<Actions />}
    >
      <RouterTab
        tabs={manufacturerTabs}
        prefix={`/inventory/settings/manufactures/${manufacturerId as string}`}
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
