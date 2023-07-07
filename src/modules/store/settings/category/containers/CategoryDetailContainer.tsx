import { memo } from 'react';
import CategorySummary from 'modules/store/settings/category/components/CategorySummary/CategorySummary';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import CategoryDetailsContent from 'modules/store/settings/category/components/CategoryDetailsContent/CategoryDetailsContent';
import { CategoryDetailProvider } from 'modules/store/settings/category/context/CategoryDetailContext';
import { CategoryChildrenProvider } from 'modules/store/settings/category/context/CategoryChildrenContext';
import CategoryChildrens from 'modules/store/settings/category/components/CategoryDetailsContent/CategoryChildrens';

const CategoryDetailsContainer = () => (
  <CategoryDetailProvider>
    <CategoryChildrenProvider>
      <DetailLayout>
        <DetailSummary>
          <CategorySummary />
        </DetailSummary>
        <DetailContent ghost>
          <CategoryChildrens />
        </DetailContent>
      </DetailLayout>
    </CategoryChildrenProvider>
  </CategoryDetailProvider>
);

export default memo(CategoryDetailsContainer);
