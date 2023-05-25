import React, { memo } from 'react';
import { useParams } from 'react-router';
import { useFindEmployeeTimeOff } from 'modules/rrhh/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOff';
import { BasicTable } from '@dfl/mui-admin-layout';
import { columns } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoff.columns';
import { Paper } from '@mui/material';
import { H3 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

const TimeOffHistory = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useFindEmployeeTimeOff(id as string);
  const { t } = useTranslation('employee');

  return (
    <Paper sx={{ p: 4 }}>
      <H3>{t('section.freeTime.history')}</H3>
      <BasicTable columns={columns} data={data?.data || []} isLoading={isLoading} error={error} />
    </Paper>
  );
};

export default memo(TimeOffHistory);
