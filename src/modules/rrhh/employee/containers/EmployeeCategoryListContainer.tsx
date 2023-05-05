import { memo } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router';
import BasicTable from 'components/libs/BasicTable';
import { categoryColumns } from 'modules/rrhh/employee/constants/employee-category.columns';
import { useFindEmployeeCategories } from 'modules/rrhh/employee/hooks/useFindCategories';

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
