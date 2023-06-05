import { memo } from 'react';
import Box from '@mui/material/Box';
import { jobInformationColumns } from 'modules/rrhh/employee/employee-detail/job-information/constants/employee-job-information.columns';
import { useFindEmployeeJobInformation } from 'modules/rrhh/employee/employee-detail/job-information/hooks/useFindJobInformations';
import { BasicTable } from '@dfl/mui-admin-layout';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';

const EmployeeJobInformationListContainer = () => {
  const { id } = useEmployeeDetail();
  const { isLoading, error, data } = useFindEmployeeJobInformation(id);

  return (
    <Box>
      <BasicTable columns={jobInformationColumns} data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(EmployeeJobInformationListContainer);
