import React, { memo } from 'react';
import { BasicTable } from '@dfl/mui-admin-layout';
import { columns } from '../../constants/timeoff.columns';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import {
  UseFindEmployeeHistoryTimeOff
} from 'modules/store/employee/employee-detail/free-time/hooks/useFindEmployeeHistoryTimeOff';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';

const TimeOffHistory = () => {
  const { id } = useEmployeeDetail();
  const { t } = useTranslation('employee');

  const { isLoading, data, error } = UseFindEmployeeHistoryTimeOff(id);
  return (
        <FormPaper title={t('section.freeTime.history')} sx={{ marginBottom: '1rem' }}>
            <BasicTable columns={columns} data={data?.data || []} isLoading={isLoading} error={error}/>
        </FormPaper>
  );
};

export default memo(TimeOffHistory);
