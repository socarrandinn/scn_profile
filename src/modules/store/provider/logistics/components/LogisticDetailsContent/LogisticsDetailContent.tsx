import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import logisticRoutes from 'modules/store/provider/logistics/routes/tabLogisticsRouter';
import { logisticsTabs } from 'modules/store/provider/manufacture/constants/tabs.logistic.details';
const LogisticsDetailContent = () => {
  // const { manufacture, isLoading, manufacturerId } = ManufactureDetail();
  const { id } = useParams();
  return (
        <Box pt={1}>
            <TabsHeader>
                <RouterTab tabs={logisticsTabs} prefix={`/provider/logistics/${id as string}`} translationNs={'account'}/>
            </TabsHeader>
            <Box>
                <RouteLoader routes={logisticRoutes}
                             notfoundRedirect={`/provider/logistics/${id as string}/general`}/>
            </Box>
        </Box>
  )
}
export default memo(LogisticsDetailContent);
