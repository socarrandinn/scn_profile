import { memo } from 'react';
import CategorySummary from 'modules/inventory/settings/category/components/CategorySummary/CategorySummary';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CategoryDetailProvider } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import CategoryChildren from 'modules/inventory/settings/category/components/CategoryDetailsContent/CategoryChildrens';
import { CategoryHeaderDetails } from '../components/CategoryHeaderDetails';

const CategoryDetailsContainer = () => (
  <CategoryDetailProvider>
    <CategoryHeaderDetails />
    <DetailLayout marginTop={{ xs: 2, md: 3 }}>
      <DetailSummary>
        <CategorySummary />
      </DetailSummary>
      <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
        <CategoryChildren />
      </DetailContent>
    </DetailLayout>
  </CategoryDetailProvider>
);

export default memo(CategoryDetailsContainer);
