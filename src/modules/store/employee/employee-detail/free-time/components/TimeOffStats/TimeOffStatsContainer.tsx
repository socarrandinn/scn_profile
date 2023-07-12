import { memo } from 'react';
import { FlexBox, HandlerError } from '@dfl/mui-react-common';
import TimeOffStat from './TimeOffStat';
import { IEmployeeTimeOffStat } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import {
  useFindEmployeeTimeOffStats
} from 'modules/store/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOffStats';
import { TimeOffStatSkeleton } from '.';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';

const TimeOffStatsContainer = () => {
  const { id } = useEmployeeDetail();
  const { isLoading, error, data: timeOffStats } = useFindEmployeeTimeOffStats(id);

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
