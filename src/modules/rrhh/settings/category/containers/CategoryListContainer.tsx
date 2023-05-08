import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCategories } from 'modules/rrhh/settings/category/hooks/useFindCategories';
import { categoryColumns } from 'modules/rrhh/settings/category/constants/category.columns';
import { CategoryListToolbar } from 'modules/rrhh/settings/category/components/CategoryListToolbar';
import CategoryEditModal from 'modules/rrhh/settings/category/containers/CategoryEditModal';

const CategoryListContainer = () => {
  const { isLoading, error, data } = useFindCategories();
  return (
    <Box>
      <CategoryListToolbar />
      <Table
        columns={categoryColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <CategoryEditModal />
    </Box>
  );
};

export default memo(CategoryListContainer);
