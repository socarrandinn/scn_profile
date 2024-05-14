import { memo } from 'react';
import { Stack } from '@mui/material';
import { LogisticGeneralBasic } from '../components/LogisticGeneralBasic';
import { LogisticGeneralAddress } from '../components/LogisticGeneralAddress';
import { LogisticGeneralContact } from '../components/LogisticGeneralContact';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { LogisticTags } from '../components/LogisticTags';

const LogisticsGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost>
          <LogisticTags />
        </DetailSummary>
        <DetailContent ghost>
          <LogisticGeneralBasic />
          <LogisticGeneralAddress />
          <LogisticGeneralContact />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(LogisticsGeneralContainer);
