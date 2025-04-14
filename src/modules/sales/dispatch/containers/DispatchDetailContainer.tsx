import { Stack } from '@mui/material';
import { memo } from 'react';
import DispatchHeader from '../components/DispatchHeader/DispatchHeader';
import DispatchDetailsTabs from '../pages/DispatchDetailsTabs';

const DispatchDetailContainer = () => {
  return (
    <Stack>
      <DispatchHeader />
      <DispatchDetailsTabs />
    </Stack>
  );
};

export default memo(DispatchDetailContainer);
