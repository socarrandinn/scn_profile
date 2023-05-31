import React, { memo } from 'react';
import { TimeOffStats } from '../components/TimeOffStats';
import { TimeOffListContainer } from '../components/TimeOffList';
import { TimeOffHistory } from '../components/TimeOffHistory';

const EmployeeTimeOff = () => {
  return (
    <>
      <TimeOffStats />
      <TimeOffListContainer />
      <TimeOffHistory />
    </>
  );
};

export default memo(EmployeeTimeOff);
