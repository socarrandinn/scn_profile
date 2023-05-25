import React, { memo } from 'react';
import { TimeOffStats } from '../components/TimeOffStats';
import { TimeOffListContainer } from '../components/TimeOffList';
import { TimeOffHistory } from '../components/TimeOffHistory';
import { FlexBox } from '@dfl/mui-react-common';

const EmployeeTimeOff = () => {
  return (
    <FlexBox gap={4} flexDirection={'column'}>
      <TimeOffStats />
      <TimeOffListContainer />
      <TimeOffHistory />
    </FlexBox>
  );
};

export default memo(EmployeeTimeOff);
