import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import accountRoutes from 'modules/rrhh/employee/employee-detail/common/routes/employee';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';

const EmployeeDetailsContent = () => {
  const { id } = useEmployeeDetail();

  return (
        <Box>
            <RouteLoader routes={accountRoutes} notfoundRedirect={`/rrhh/employees/${id}/personal`}/>
        </Box>
  );
};

export default memo(EmployeeDetailsContent);
