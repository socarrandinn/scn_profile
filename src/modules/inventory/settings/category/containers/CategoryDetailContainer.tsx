import { memo } from 'react';
import { CategoryDetailProvider } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import CategoryChildren from 'modules/inventory/settings/category/components/CategoryDetailsContent/CategoryChildrens';
import { CategoryHeaderDetails } from '../components/CategoryHeaderDetails';

const CategoryDetailsContainer = () => (
  <CategoryDetailProvider>
    <CategoryHeaderDetails />
    <CategoryChildren marginTop={{ xs: 2, md: 3 }} />
  </CategoryDetailProvider>
);

export default memo(CategoryDetailsContainer);
