import { memo } from 'react';
import Box from '@mui/material/Box';
import { jobInformationColumns } from 'modules/rrhh/employee/employee-detail/job-information/constants/employee-job-information.columns';
import { useFindEmployeeJobInformation } from 'modules/rrhh/employee/employee-detail/job-information/hooks/useFindJobInformations';
import { useParams } from 'react-router';
import { BasicTable } from '@dfl/mui-admin-layout';

const EmployeeJobInformationListContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindEmployeeJobInformation(id as string);

  return (
    <Box>
      <BasicTable columns={jobInformationColumns} data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(EmployeeJobInformationListContainer);
