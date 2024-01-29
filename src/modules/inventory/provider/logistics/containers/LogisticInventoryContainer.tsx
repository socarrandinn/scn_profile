import { memo } from 'react';
import LogisticStoreTabs from 'modules/inventory/provider/logistics/components/LogisticStoreTabs/LogisticStoreTabs';
import { Stack } from '@mui/material';
import { LogisticInventoryCardContainer } from './LogisticInventoryCardContainer';

const LogisticInventoryContainer = () => {

  return (
    <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
      <LogisticInventoryCardContainer />
      <LogisticStoreTabs />
    </Stack>
  )
};

export default memo(LogisticInventoryContainer);
