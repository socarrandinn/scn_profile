import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { provedorProductTabs } from 'modules/store/provider/products/constants/tabs.products.details';
import ProProductsRoutes from 'modules/store/provider/products/routes/tabProductsRouter';
const ProviderProductsDetailContent = () => {
  const { id } = useParams();
  return (
        <Box pt={1}>
            <TabsHeader>
                <RouterTab tabs={provedorProductTabs} prefix={`/provider/products/${id as string}`} translationNs={'account'}/>
            </TabsHeader>
            <Box>
                <RouteLoader routes={ProProductsRoutes}
                             notfoundRedirect={`/provider/products/${id as string}/general`}/>
            </Box>
        </Box>
  )
}
export default memo(ProviderProductsDetailContent);
