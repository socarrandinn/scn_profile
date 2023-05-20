import { memo } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router';
import { categoryColumns } from 'modules/rrhh/employee/employee-detail/job-information/constants/employee-category.columns';
import { useFindEmployeeCategories } from 'modules/rrhh/employee/employee-detail/job-information/hooks/useFindCategories';
import { BasicTable } from '@dfl/mui-admin-layout';

const EmployeeCategoryListContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindEmployeeCategories(id as string);

  return (
    <Box>
      <BasicTable columns={categoryColumns} data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(EmployeeCategoryListContainer);
