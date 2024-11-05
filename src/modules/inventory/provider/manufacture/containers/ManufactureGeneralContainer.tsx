import { Stack } from '@mui/material';
import { memo } from 'react';
import ManufactureGeneralDetails from '../components/ManufactureGeneralDetails/ManufactureGeneralDetails';

const ManufactureGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <ManufactureGeneralDetails />
      {/* <DetailLayout>
        <DetailSummary ghost> // todo - define section tags
          <ManufactureTags />
        </DetailSummary>
        <DetailContent ghost sx={{ width: '100%' }}>
          <ManufactureGeneralDetails />
        </DetailContent>
      </DetailLayout> */}
    </Stack>
  );
};

export default memo(ManufactureGeneralContainer);
