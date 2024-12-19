import { Suspense, memo } from 'react';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import CategoryChildren from 'modules/inventory/settings/category/components/CategoryDetailsContent/CategoryChildrens';
import { CategoryHeaderDetails } from '../components/CategoryHeaderDetails';
import { PageLayout } from 'layouts/index';
import tabActionRoutes from '../routes/tabActionRoutes';

const CategoryDetailsContainer = () => {
  const { category } = useCategoryDetail();
  return (
    <>
      <PageLayout>
        <CategoryHeaderDetails />
        <PageLayout>
          <Suspense>
            <CategoryChildren
              notfoundRedirect={`/inventory/settings/categories/${category?._id as string}/subcategories`}
              tabActionsRoutes={tabActionRoutes}
            />
          </Suspense>
        </PageLayout>
      </PageLayout>
    </>
  );
};

export default memo(CategoryDetailsContainer);
