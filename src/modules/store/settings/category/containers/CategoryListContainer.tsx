import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCategories } from 'modules/store/settings/category/hooks/useFindCategories';
import { categoryColumns } from 'modules/store/settings/category/constants/category.columns';
import { CategoryListToolbar } from 'modules/store/settings/category/components/CategoryListToolbar';
import CategoryEditModal from 'modules/store/settings/category/containers/CategoryEditModal';

export type CategoryListContainerProps = {
  parent?: string
}

const CategoryListContainer = ({ parent }: CategoryListContainerProps) => {
  const { isLoading, error, data } = useFindCategories(parent);
  return (
        <Box>
            <CategoryListToolbar/>
            <Table
                columns={categoryColumns}
                data={data?.data}
                total={data?.total}
                isLoading={isLoading}
                error={error}
            />
            <CategoryEditModal/>
        </Box>
  );
};

export default memo(CategoryListContainer);
