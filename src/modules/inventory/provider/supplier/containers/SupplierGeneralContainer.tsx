import { Stack } from '@mui/material';
import { memo } from 'react';
import { SupplierGeneralAddress } from '../components/SupplierGeneralAddress';
import { SupplierGeneralContact } from '../components/SupplierGeneralContact';
import { SupplierGeneralBasic } from '../components/SupplierGeneralBasic';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { SupplierTags } from '../components/SupplierTags';

const SupplierGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailContent ghost>
          <SupplierGeneralBasic />
          <SupplierGeneralAddress />
          <SupplierGeneralContact />
        </DetailContent>
        <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
          <SupplierTags />
        </DetailSummary>
      </DetailLayout>
    </Stack>
  );
};

export default memo(SupplierGeneralContainer);
