import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { useParams } from 'react-router-dom';
import accountRoutes from 'modules/rrhh/employee/employee-detail/common/routes/employee';

const EmployeeDetailsContent = () => {
  const { id } = useParams();

  return (
        <Box>
            <RouteLoader routes={accountRoutes} notfoundRedirect={`/rrhh/employees/${id as string}/personal`}/>
        </Box>
  );
};

export default memo(EmployeeDetailsContent);
