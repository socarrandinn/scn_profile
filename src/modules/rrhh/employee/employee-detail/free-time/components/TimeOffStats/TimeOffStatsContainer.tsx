import { memo } from 'react';
import { useParams } from 'react-router';
import { FlexBox } from '@dfl/mui-react-common';
import TimeOffStat from './TimeOffStat';
import { Paper } from '@mui/material';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { useFindEmployeeTimeOffStats } from 'modules/rrhh/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOffStats';

const TimeOffStatsContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindEmployeeTimeOffStats(id as string);

  if (isLoading) {
    return <></>;
  }

  return (
    <Paper
      sx={{
        padding: '40px 64px',
      }}
    >
      <FlexBox gap={'100px'}>
        {data?.data?.map((stat: IEmployeeTimeOffStat) => (
          <TimeOffStat key={stat.policy.name} {...stat} />
        ))}
      </FlexBox>
    </Paper>
  );
};

export default memo(TimeOffStatsContainer);
