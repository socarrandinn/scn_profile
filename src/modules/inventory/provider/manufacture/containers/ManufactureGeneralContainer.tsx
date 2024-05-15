import { Stack } from '@mui/material';
import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import ManufactureGeneralDetails from '../components/ManufactureGeneralDetails/ManufactureGeneralDetails';
import { ManufactureTags } from '../components/ManufactureTags';

const ManufactureGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost>
          <ManufactureTags />
        </DetailSummary>
        <DetailContent ghost>
          <ManufactureGeneralDetails />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(ManufactureGeneralContainer);
