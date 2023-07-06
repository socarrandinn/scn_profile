import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { ManufactureDetail } from 'modules/provider/manufacture/context/ManufactureDetail';
import { manufactireTabs } from 'modules/provider/manufacture/constants/tabs.details';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import tabActionRoutes from 'modules/provider/manufacture/routes/tabActionRoutes';
const ManufactureDetailContent = () => {
  const { manufacture, isLoading } = ManufactureDetail();
  useBreadcrumbName(manufacture?._id || '', manufacture?.name, isLoading);
  return (
      <Box pt={1}>
        <TabsHeader>
          <RouterTab tabs={manufactireTabs} prefix={'/privider/manufacture'} translationNs={'account'} />
        </TabsHeader>
          <Box>
              <RouteLoader routes={tabActionRoutes} notfoundRedirect={'/privider/manufacture'} />
          </Box>
        </Box>
  )
}

export default memo(ManufactureDetailContent);

