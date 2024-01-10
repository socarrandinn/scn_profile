import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { Box } from '@mui/material';
import tabActionRoutes from 'modules/inventory/settings/category/routes/tabActionRoutes';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';

const CategoryChildren = () => {
  const { category } = useCategoryDetail();

  return (
    <Box>
      {/* <TabsHeader>
        <RouterTab
          tabs={categoriesTabs}
          prefix={`/inventory/setting/categories/${category?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader> */}
      <RouteLoader
        routes={tabActionRoutes}
        notfoundRedirect={`/inventory/setting/categories/${category?._id as string}/general`}
      />
    </Box>
  );
};

export default memo(CategoryChildren);
