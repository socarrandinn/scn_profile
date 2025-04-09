import { Stack } from '@mui/material';
import { memo } from 'react';
import { StoreGeneralBasic } from 'modules/inventory/warehouse/components/StoreGeneralBasic';
import { StoreGeneralAddress } from 'modules/inventory/warehouse/components/StoreGeneralAddress';
import { StoreGeneralContact } from 'modules/inventory/warehouse/components/StoreGeneralContact';
import { StoreGeneralProvider } from 'modules/inventory/warehouse/components/StoreGeneralProvider';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';

const StoreGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
          <StoreGeneralProvider />
        </DetailSummary>
        <DetailContent ghost>
          <StoreGeneralBasic />
          <StoreGeneralAddress />
          <StoreGeneralContact />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(StoreGeneralContainer);
