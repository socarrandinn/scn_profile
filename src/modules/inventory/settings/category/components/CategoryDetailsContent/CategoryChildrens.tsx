import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import { Box } from '@mui/material';
import { categoriesTabs } from 'modules/inventory/settings/category/constants/tabs.details';
import tabActionRoutes from 'modules/inventory/settings/category/routes/tabActionRoutes';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';

const CategoryChildren = () => {
  const { category } = useCategoryDetail();

  return (
    <Box>
      <TabsHeader>
        <RouterTab
          tabs={categoriesTabs}
          prefix={`/inventory/setting/categories/${category?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader>
      <RouteLoader
        routes={tabActionRoutes}
        notfoundRedirect={`/inventory/setting/categories/${category?._id as string}/general`}
      />
    </Box>
  );
};

export default memo(CategoryChildren);
