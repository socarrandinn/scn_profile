import { memo } from 'react';
import Box from '@mui/material/Box';
import { categoryColumns } from 'modules/rrhh/employee/employee-detail/job-information/constants/employee-category.columns';
import { useFindEmployeeCategories } from 'modules/rrhh/employee/employee-detail/job-information/hooks/useFindCategories';
import { BasicTable } from '@dfl/mui-admin-layout';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';

const EmployeeCategoryListContainer = () => {
  const { id } = useEmployeeDetail();
  const { isLoading, error, data } = useFindEmployeeCategories(id);

  return (
    <Box>
      <BasicTable columns={categoryColumns} data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(EmployeeCategoryListContainer);
