import { memo } from 'react';
import Box from '@mui/material/Box';
import { useFindEmployeeCompensations } from 'modules/rrhh/employee/employee-detail/job-information/hooks/useFindCompensations';
import { compensationColumns } from 'modules/rrhh/employee/employee-detail/job-information/constants/employee-composition.columns';
import { BasicTable } from '@dfl/mui-admin-layout';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';

const EmployeeCompensationListContainer = () => {
  const { id } = useEmployeeDetail();
  const { isLoading, error, data } = useFindEmployeeCompensations(id);

  return (
    <Box>
      <BasicTable columns={compensationColumns} data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(EmployeeCompensationListContainer);
