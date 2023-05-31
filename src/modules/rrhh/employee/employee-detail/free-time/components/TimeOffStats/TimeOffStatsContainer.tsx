import { memo, useMemo } from 'react';
import { useParams } from 'react-router';
import { FlexBox, HandlerError } from '@dfl/mui-react-common';
import TimeOffStat from './TimeOffStat';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import {
  useFindEmployeeTimeOffStats
} from 'modules/rrhh/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOffStats';
import { TimeOffStatSkeleton } from '../../components/TimeOffStats';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';

const TimeOffStatsContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data: timeOffStats } = useFindEmployeeTimeOffStats(id as string);

  if (error) {
    return <HandlerError error={error}/>;
  }

  if (isLoading) {
    return <TimeOffStatSkeleton/>;
  }

  return (
        <FormPaper firsts>
            <FlexBox gap={'15px 70px'} flexWrap={'wrap'}>
                {timeOffStats?.map((stat: IEmployeeTimeOffStat) => (
                    <TimeOffStat key={(stat?.policy as ITimeOffPolicies)?.name} value={stat}
                                 className={'min-w-[100px]'}/>
                ))}
            </FlexBox>
        </FormPaper>
  );
};

export default memo(TimeOffStatsContainer);
