import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { Box, BoxProps } from '@mui/material';
import tabActionRoutes from 'modules/inventory/settings/category/routes/tabActionRoutes';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';

const CategoryChildren = (props: BoxProps) => {
  const { category } = useCategoryDetail();

  return (
    <Box {...props}>
      {/* <TabsHeader>
        <RouterTab
          tabs={categoriesTabs}
          prefix={`/inventory/setting/categories/${category?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader> */}
      <RouteLoader
        routes={tabActionRoutes}
        notfoundRedirect={`/inventory/settings/categories/${category?._id as string}/general`}
      />
    </Box>
  );
};

export default memo(CategoryChildren);
