import { Stack } from '@mui/material';
import { memo } from 'react';
import { DistributionCentersGeneralBasic } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralBasic';
import { DistributionCentersGeneralAddress } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralAddress';
import { DistributionCentersGeneralContact } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralContact';
import { DistributionCentersGeneralProvider } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralProvider';
import { DistributionCentersGeneralLocations } from '../components/DistributionCentersGeneralLocations';

const DistributionCentersGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DistributionCentersGeneralBasic />
      <DistributionCentersGeneralLocations />
      <DistributionCentersGeneralProvider />
      <DistributionCentersGeneralAddress />
      <DistributionCentersGeneralContact />
    </Stack>
  );
};

export default memo(DistributionCentersGeneralContainer);
