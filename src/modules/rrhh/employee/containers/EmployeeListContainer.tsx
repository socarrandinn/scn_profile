import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindEmployees } from 'modules/rrhh/employee/hooks/useFindEmployees';
import { employeeColumns } from 'modules/rrhh/employee/constants/employee.columns';
import { EmployeeListToolbar } from 'modules/rrhh/employee/components/EmployeeListToolbar';
import EmployeeEditModal from 'modules/rrhh/employee/containers/EmployeeEditModal';

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
      <EmployeeEditModal />
    </Box>
  );
};

export default memo(EmployeeListContainer);
