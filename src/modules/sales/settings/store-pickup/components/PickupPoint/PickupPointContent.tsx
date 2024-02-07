import { Stack } from '@mui/material';
import { memo } from 'react';
import PickupPointPlacesList from './PickupPointPlacesList';

const PickupPointContent = () => {
  return (
    <Stack mt={2}>
      <PickupPointPlacesList />
    </Stack>
  );
};

export default memo(PickupPointContent);
