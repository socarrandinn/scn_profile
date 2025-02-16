import { memo } from 'react';
import LogisticStoreTabs from 'modules/inventory/provider/logistics/components/LogisticStoreTabs/LogisticStoreTabs';
import { Stack } from '@mui/material';
import { PageLayout } from 'layouts/index';

const LogisticInventoryContainer = () => {
  return (
    <PageLayout>
      <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
        <LogisticStoreTabs />
      </Stack>
    </PageLayout>
  );
};

export default memo(LogisticInventoryContainer);
