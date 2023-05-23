import React, { memo } from 'react';
import { useParams } from 'react-router';
import { useFindEmployeeTimeOff } from 'modules/rrhh/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOff';
import { BasicTable } from '@dfl/mui-admin-layout';
import { columns } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoff.columns';
import { Paper } from '@mui/material';

const TimeOffLogs = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useFindEmployeeTimeOff(id as string);

  return (
    <Paper sx={{ p: 4 }}>
      <BasicTable columns={columns} data={data?.data || []} isLoading={isLoading} error={error} />
    </Paper>
  );
};

export default memo(TimeOffLogs);
