import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import { employeeTabs } from 'modules/rrhh/employee/employee-detail/common/constants/employee.tabs';
import { useParams } from 'react-router-dom';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import accountRoutes from 'modules/rrhh/employee/employee-detail/common/routes/employee';

const EmployeeDetailsContent = () => {
  const { id } = useParams();

  return (
        <Box pt={1}>
            <TabsHeader>
                <RouterTab tabs={employeeTabs} prefix={`/rrhh/employees/${id as string}`} translationNs={'employee'}/>
            </TabsHeader>
            <Box>
                <RouteLoader routes={accountRoutes} notfoundRedirect={`/rrhh/employees/${id as string}/personal`}/>
            </Box>
        </Box>
  );
};

export default memo(EmployeeDetailsContent);
