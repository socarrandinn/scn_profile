import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import CategoryListContainer, {
  CategoryListContainerProps
} from 'modules/inventory/settings/category/containers/CategoryListContainer';
import { categoryFilters } from 'modules/inventory/settings/category/constants/category.filters';
import { useParams } from 'react-router-dom';

const CategoryList = ({ parent }: CategoryListContainerProps) => {
  const { t } = useTranslation('category');
  const { id } = useParams();

  return (
    <PagePaperLayout title={t(parent ? 'subList' : 'list')} mt={parent || id ? '0' : 3}>
      <TableProvider id={`categories-${parent || ''}`}
                     filters={categoryFilters} defaultOrderField={'order'}
                     defaultOrder={'desc'}>
        <CategoryListContainer parent={parent} />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CategoryList);
