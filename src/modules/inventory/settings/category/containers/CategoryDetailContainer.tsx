import { memo } from 'react';
import { CategoryDetailProvider } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import CategoryChildren from 'modules/inventory/settings/category/components/CategoryDetailsContent/CategoryChildrens';
import { CategoryHeaderDetails } from '../components/CategoryHeaderDetails';
import { PageLayout } from 'layouts/index';

const CategoryDetailsContainer = () => (
  <CategoryDetailProvider>
    <CategoryHeaderDetails />
    <PageLayout>
      <CategoryChildren />
    </PageLayout>
    {/* <DetailLayout marginTop={{ xs: 2, md: 3 }}>
      <DetailSummary>
        <CategorySummary />
      </DetailSummary>
       <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
      </DetailContent>
    </DetailLayout> */}
  </CategoryDetailProvider>
);

export default memo(CategoryDetailsContainer);
