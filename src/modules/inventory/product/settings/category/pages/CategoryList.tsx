import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import CategoryListContainer from 'modules/inventory/product/settings/category/containers/CategoryListContainer';
import { categoryFilters } from 'modules/inventory/product/settings/category/constants/category.filters';

const CategoryList = () => {
  const { t } = useTranslation('category');

  return (
    <PagePaperLayout title={t('categoryList')}>
      <TableProvider id={'categories'} filters={categoryFilters}>
        <CategoryListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CategoryList);
