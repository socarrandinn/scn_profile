import { Stack } from '@mui/material';
import { memo } from 'react';
import DispatchHeader from '../components/DispatchHeader/DispatchHeader';
import DispatchSubOrders from '../components/DispatchSubOrders/DispatchSubOrders';

const DispatchDetailContainer = () => {
  return (
    <Stack>
      <DispatchHeader />
      <DispatchSubOrders />
    </Stack>
  );
};

export default memo(DispatchDetailContainer);
