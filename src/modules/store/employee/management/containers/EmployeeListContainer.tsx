import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindEmployees } from 'modules/store/employee/management/hooks/useFindEmployees';
import { employeeColumns } from 'modules/store/employee/management/constants/employee.columns';
import { EmployeeListToolbar } from 'modules/store/employee/management/components/EmployeeListToolbar';

const EmployeeListContainer = () => {
  const { isLoading, error, data } = useFindEmployees();
  return (
    <Box>
      <EmployeeListToolbar />
      <Table
        columns={employeeColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(EmployeeListContainer);
