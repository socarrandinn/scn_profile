import { memo } from 'react';
import Box from '@mui/material/Box';
import { useFindEmployeeCompensations } from 'modules/rrhh/employee/hooks/useFindCompensations';
import { useParams } from 'react-router';
import { compensationColumns } from 'modules/rrhh/employee/constants/employee-composition.columns';
import BasicTable from 'components/libs/BasicTable';

const EmployeeCompensationListContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindEmployeeCompensations(id as string);

  return (
    <Box>
      <BasicTable columns={compensationColumns} data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(EmployeeCompensationListContainer);
