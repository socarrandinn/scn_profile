import { memo, useMemo } from 'react';
import { useParams } from 'react-router';
import { FlexBox, HandlerError } from '@dfl/mui-react-common';
import TimeOffStat from './TimeOffStat';
import { Paper } from '@mui/material';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { useFindEmployeeTimeOffStats } from 'modules/rrhh/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOffStats';
import { TimeOffStatSkeleton } from '../../components/TimeOffStats';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

const TimeOffStatsContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindEmployeeTimeOffStats(id as string);

  const timeOffStats = useMemo(() => data?.data?.data, [data]);

  if (error) {
    return <HandlerError error={error} />;
  }

  if (isLoading) {
    return (
      <Paper
        sx={{
          padding: '40px 64px',
        }}
      >
        <FlexBox gap={'80px'}>
          {Array.from(Array(3).keys()).map((el) => (
            <TimeOffStatSkeleton key={el} />
          ))}
        </FlexBox>
      </Paper>
    );
  }

  return (
    <Paper
      sx={{
        padding: '40px 64px',
      }}
    >
      <FlexBox gap={'80px'}>
        {timeOffStats?.map((stat: IEmployeeTimeOffStat) => (
          <TimeOffStat key={(stat.policy as ITimeOffPolicies).name} value={stat} className={'min-w-[100px]'} />
        ))}
      </FlexBox>
    </Paper>
  );
};

export default memo(TimeOffStatsContainer);
