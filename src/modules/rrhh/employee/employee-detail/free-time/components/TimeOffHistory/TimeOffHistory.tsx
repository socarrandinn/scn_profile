import React, { memo } from 'react';
// import { useParams } from 'react-router';
// import { useFindEmployeeTimeOff } from '../../hooks/useFindEmployeeTimeOff';
// import { BasicTable } from '@dfl/mui-admin-layout';
// import { columns } from '../../constants/timeoff.columns';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';

const TimeOffHistory = () => {
  // const { id } = useParams();
  const { t } = useTranslation('employee');

  // const { isLoading, data, error } = useFindEmployeeTimeOff(id as string);
  return (
        <FormPaper title={t('section.freeTime.history')} sx={{ marginBottom: '1rem' }}>
            {/* <BasicTable columns={columns} data={data?.data || []} isLoading={isLoading} error={error}/> */}
        </FormPaper>
  );
};

export default memo(TimeOffHistory);
