import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import employeeRoutes from 'modules/rrhh/employee/routes/employee';
import { employeeTabs } from 'modules/rrhh/employee/constants/employee.tabs';
import { useParams } from 'react-router-dom';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';

const EmployeeDetailsContent = () => {
  const { id } = useParams();

  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab tabs={employeeTabs} prefix={`/rrhh/employees/${id as string}`} translationNs={'account'} />
      </TabsHeader>
      <Box>
        <RouteLoader routes={employeeRoutes} notfoundRedirect={`/rrhh/employees/${id as string}/general`} />
      </Box>
    </Box>
  );
};

export default memo(EmployeeDetailsContent);
