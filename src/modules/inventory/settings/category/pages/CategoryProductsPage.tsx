import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import { subCategoryProductFilters } from 'modules/inventory/product/constants';
import CategoryProductListContainer from '../containers/CategoryProductListContainer';

const CategoryProductsPage = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout title={t('list')} sx={{ mt: 0 }}>
      <TableProvider id={'subcategory-products'} filters={subCategoryProductFilters}>
        <CategoryProductListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CategoryProductsPage);
