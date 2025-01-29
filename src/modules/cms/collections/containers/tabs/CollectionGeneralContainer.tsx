import { Stack } from '@mui/material';
import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';

const CollectionGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
          SUMMARY
        </DetailSummary>
        <DetailContent ghost>CONTENT</DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(CollectionGeneralContainer);
