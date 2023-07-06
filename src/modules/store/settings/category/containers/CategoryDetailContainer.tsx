import { memo } from 'react';
import CategorySummary from 'modules/store/settings/category/components/CategorySummary/CategorySummary';
import { CategoryDetailProvider } from 'modules/store/settings/category/context/CategoryDetailContext';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import CategoryDetailsContent from 'modules/store/settings/category/components/CategoryDetailsContent/CategoryDetailsContent';

const CategoryDetailsContainer = () => (
  <CategoryDetailProvider>
    <DetailLayout>
      <DetailSummary>
        <CategorySummary />
      </DetailSummary>
      <DetailContent ghost>
        <CategoryDetailsContent />
      </DetailContent>
    </DetailLayout>
  </CategoryDetailProvider>
);

export default memo(CategoryDetailsContainer);
