import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryList } from 'modules/store/settings/category/pages';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import { Box } from '@mui/material';
import { categoriesTabs } from 'modules/store/settings/category/constants/tabs.details';
import tabActionRoutes from 'modules/store/settings/category/routes/tabActionRoutes';
import { useCategoryDetail } from 'modules/store/settings/category/context/CategoryDetailContext';

const CategoryChildren = () => {
  const { category, isLoading, error } = useCategoryDetail();

  return (
    <Box>
      <TabsHeader>
        <RouterTab
          tabs={categoriesTabs}
          prefix={`/store/setting/categories/${category?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader>
      <RouteLoader
        routes={tabActionRoutes}
        notfoundRedirect={`/store/setting/categories/${category?._id as string}/general`}
      />
    </Box>
  );
};

export default memo(CategoryChildren);
