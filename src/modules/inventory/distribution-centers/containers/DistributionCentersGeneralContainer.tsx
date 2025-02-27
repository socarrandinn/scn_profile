import { Stack } from '@mui/material';
import { memo } from 'react';
import { DistributionCentersGeneralBasic } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralBasic';
import { DistributionCentersGeneralAddress } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralAddress';
import { DistributionCentersGeneralContact } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralContact';
import { DistributionCentersGeneralProvider } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralProvider';
import { DistributionCentersGeneralLocations } from '../components/DistributionCentersGeneralLocations';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { DistributionCentersCommission } from '../components/DistributionCentersCommission';

const DistributionCentersGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
          <DistributionCentersGeneralProvider />
          <DistributionCentersCommission />
          <DistributionCentersGeneralLocations />
          {/* <StoreGeneralLocations /> */}
        </DetailSummary>
        <DetailContent ghost>
          <DistributionCentersGeneralBasic />
          <DistributionCentersGeneralAddress />
          <DistributionCentersGeneralContact />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(DistributionCentersGeneralContainer);
