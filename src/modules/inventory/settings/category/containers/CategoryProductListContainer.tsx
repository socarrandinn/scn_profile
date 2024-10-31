import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { categoryProductTabColumns } from 'modules/inventory/product/constants';
import { useFindCategoryProducts } from 'modules/inventory/settings/category/hooks/useFindCategoryProducts';
import { useParams } from 'react-router';
import { CategoryProductToolbar } from 'modules/inventory/settings/category/components/CategoryProductToolbar';

const CategoryProductListContainer = () => {
  const { id: categoryId } = useParams();
  const { isLoading, error, data } = useFindCategoryProducts(categoryId);
  return (
    <>
      <CategoryProductToolbar />
      <Table
        columns={categoryProductTabColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </>
  );
};

export default memo(CategoryProductListContainer);
