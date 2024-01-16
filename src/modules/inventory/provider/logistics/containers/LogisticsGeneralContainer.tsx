import { memo } from 'react';
import { Stack } from '@mui/material';
import { LogisticGeneralBasic } from '../components/LogisticGeneralBasic';
import { LogisticGeneralAddress } from '../components/LogisticGeneralAddress';
import { LogisticGeneralContact } from '../components/LogisticGeneralContact';

const LogisticsGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <LogisticGeneralBasic/>
      <LogisticGeneralAddress/>
      <LogisticGeneralContact/>
    </Stack>
  );
};

export default memo(LogisticsGeneralContainer);
