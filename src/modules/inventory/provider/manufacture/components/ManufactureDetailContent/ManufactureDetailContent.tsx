import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { ManufactureDetail } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import { manufactureTabs } from 'modules/inventory/provider/manufacture/constants/tabs.details';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import tabActionRoutes from 'modules/inventory/provider/manufacture/routes/tabActionRoutes';

const ManufactureDetailContent = () => {
  const { manufacture, isLoading, manufacturerId } = ManufactureDetail();
  useBreadcrumbName(manufacture?._id || '', manufacture?.name, isLoading);
  return (
        <Box pt={1}>
            <TabsHeader>
                <RouterTab tabs={manufactureTabs} prefix={`/provider/manufactures/${manufacturerId as string}`} translationNs={'account'}/>
            </TabsHeader>
            <Box>
                <RouteLoader routes={tabActionRoutes}
                             notfoundRedirect={`/provider/manufactures/${manufacturerId as string}/general`}/>
            </Box>
        </Box>
  )
}

export default memo(ManufactureDetailContent);
