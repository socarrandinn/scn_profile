import React, { memo } from 'react';
import { TimeOffStats } from '../components/TimeOffStats';
import { TimeOffListContainer } from '../components/TimeOffList';
import { TimeOffLogs } from '../components/TimeOffLogs';
import { FlexBox } from '@dfl/mui-react-common';

const EmployeeFreeTime = () => {
  return (
    <FlexBox gap={4} flexDirection={'column'}>
      <TimeOffStats />
      <TimeOffListContainer />
      <TimeOffLogs />
    </FlexBox>
  );
};

export default memo(EmployeeFreeTime);
